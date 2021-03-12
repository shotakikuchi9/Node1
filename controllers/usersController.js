const User = require("../models/user");

module.exports = {
  showLoginPage: function(req, res) {
    res.render('login')
  },
  showRegisterPage: function(req, res) {
    res.render('register')
  },
  showDashboardPage: function(req, res) {
    res.render('dashboard')
  }
};