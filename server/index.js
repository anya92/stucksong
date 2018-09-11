const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./routes');

const app = express();
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
});
mongoose.connection.on('error', console.log);
mongoose.Promise = global.Promise;

require('./models/User');
require('./passport');

app.use(morgan('tiny'));
app.use(cors());

app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
  }),
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.dev.js');
  const history = require('connect-history-api-fallback');
  app.use(history());
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
