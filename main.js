const port = 3000
const express = require('express')
const usersController = require('./controllers/usersController')
const app = express();
const mongoose = require('mongoose')
const User = require('./models/user')
const { check, validationResult } = require('express-validator');

mongoose.connect(
  'mongodb://localhost;27017/users_db',
  {useNewUrlParser: true}
)
const db = mongoose.connection;

app.use(
  express.urlencoded({
    extended: false
  })
)

app.use(express.json());

app.set('view engine', 'ejs')

app.get('/', usersController.showLoginPage)

app.get('/register', usersController.showRegisterPage)

app.get('/dashboard', usersController.showDashboardPage)

app.post(
  '/dashboard', 
  check('name').not().isEmpty().withMessage('nust be a valid name'),
  check('email').not().isEmpty().withMessage('must be a valid email'),
  check('password').not().isEmpty().isLength({ min: 7 }).withMessage('must be a valid password'),
  check('passwordConfirmation').custom((value, { req }) => {
    if(value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true
  }),
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      console.log(errors);
    } else {
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirmation: req.body.passwordConfirmation
      })
      console.log(newUser);
      newUser.save((error, result) => {
        if(error) {
          console.log(error);
        } else {
          res.render('dashboard', {userData: req.body});
        }
      })
    }
  }
)

app.listen(port)