const mongoose = require('mongoose');

//create schema
const userSchema = new mongoose.Schema({
    name: {
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
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6    
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//add module with mongoose model using the user schema we created. We will use that to add a registered user.
module.exports = mongoose.model('User', userSchema);
    