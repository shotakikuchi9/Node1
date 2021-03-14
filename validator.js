const { check, validationResult } = require('express-validator');

module.exports = [
  check('name').not().isEmpty().withMessage('nust be a valid name'),
  check('email').not().isEmpty().withMessage('must be a valid email'),
  check('password').not().isEmpty().isLength({ min: 7 }).withMessage('must be a valid password'),
  check('passwordConfirmation').custom((value, { req }) => {
    if(value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true
  }),
]