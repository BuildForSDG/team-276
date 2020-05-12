const express = require('express');
//execute express
const app = express();
//import dotenv
const dotenv = require('dotenv');
//Monggose package for MongoDB
const mongoose = require('mongoose');
//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));

//Middlewares
app.use(express.json());

//Middlewares for Routes
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server Up and running'));