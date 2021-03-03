const port = 3000
const express = require('express')
const app = express();
app.set('view engine', 'ejs')
const layouts = require('express-ejs-layouts');

app.use(layouts)

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('login')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.listen(port)