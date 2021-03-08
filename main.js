const port = 3000
const express = require('express')
const userController = require('./controllers/userController')
const app = express();
app.set('view engine', 'ejs')
const layouts = require('express-ejs-layouts');

app.use(layouts)

app.set('view engine', 'ejs');

app.get('/', userController.showLoginPage)

app.get('/register', userController.showRegisterPage)

app.listen(port)