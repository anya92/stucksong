const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

require('dotenv').config({ path: 'variables.env' });
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

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
