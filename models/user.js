const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  passwordConfirmation: String
})

module.exports = mongoose.model('user',userSchema)