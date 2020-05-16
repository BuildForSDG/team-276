const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../config/validation');


router.post('/register', async (req, res) => {
  // I AM VALIDATING THE DATA BEFORE WE MAKE A USER
  // const {error} = schema.validate(req.body);
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // Check if user already in DB
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  // HASH the password
  const salt = await bcrypt.genSalt(10);// set complexity defaut to 10
  const hashPassword = await bcrypt.hash(req.body.password, salt);


  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    userType: req.body.userType,
    email: req.body.email,
    password: hashPassword
  });

  try {
    await user.save();
    return res.redirect('/');
  } catch (err) {
    return res.status(400).send(err);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Check if user already in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email is wrong');
  // password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('password is wrong');

  // Create and assign a JWT token
  const token = jwt.sign({ user }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

  return res.send('Logged in!');
});

module.exports = router;
