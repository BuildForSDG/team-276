const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const database = require('./config/database');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(database.database);
const db = mongoose.connection;
const port = process.env.PORT || 3000;

db.once('open', () => {});
db.on('error', () => {});

const authRoute = require('./routes/auth');
const viewRoutes = require('./view-routes');

app.use('/user', authRoute);
app.use('/', viewRoutes);

app.use(express.static(`${__dirname}/public`));

http.Server(app).listen(port, () => {});
