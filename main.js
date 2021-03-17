const port = 3000
const express = require('express')
const usersController = require('./controllers/usersController')
const app = express();
const User = require('./models/user')
const validator = require('./validator')

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

app.post('/dashboard', validator, usersController.saveUser)

app.listen(port)