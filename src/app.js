const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const API_VERSION = require('./config/version');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(API_VERSION, routes);

module.exports = app;
