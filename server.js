const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});
mongoose.connection.on('error', (error) => console.log(error))
mongoose.Promise = global.Promise;


require('./models/User');
require('./passport');

app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ 
    mongooseConnection: mongoose.connection 
  })
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
