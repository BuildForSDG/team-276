// VALIDATION
const Joi = require('@hapi/joi');


// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().min(6).required(),
    lastname: Joi.string().min(6).required(),
    phone: Joi.number().min(6).required(),
    userType: Joi.number().min(1).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    confirmPass: Joi.any().valid(Joi.ref('password')).required()
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
