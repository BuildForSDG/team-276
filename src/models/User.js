const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },

  lastname: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },

  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },

  userType: {
    type: Number,
    required: true,
    max: 3,
    min: 1
  },

  phone: {
    type: Number,
    required: true
  },

  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },

  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
