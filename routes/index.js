const express = require('express').Router;
const app = express();
const user_api = app.use('/user', require('./user_api.router'));

module.exports = {
    user_api,
}
