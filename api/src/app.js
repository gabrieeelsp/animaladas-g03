const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const passport = require('passport');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
app.use(router);

module.exports = app;
