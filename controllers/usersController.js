const User = require("../models/user");
const { check, validationResult } = require('express-validator');

module.exports = {
  showLoginPage: function(req, res) {
    res.render('login')
  },
  showRegisterPage: function(req, res) {
    res.render('register')
  },
  showDashboardPage: function(req, res) {
    res.render('dashboard')
  },
  saveUser: function(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      console.log(errors);
    } else {
      let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirmation: req.body.passwordConfirmation
      }
      console.log(newUser);
      res.render('dashboard', {userData: req.body})
    }
  }
};