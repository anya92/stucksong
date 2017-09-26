const express = require('express');
const mongoose = require('mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config({ path: 'variables.env' });


const app = express();



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
