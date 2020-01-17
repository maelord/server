'use strict'
//All Dependencies
const express = require('express')
const logger = require('morgan')

      //All Route Files
const routes = require('./routes/index')

      //Express Instance
const app = express()

//load environment variables with dotenv
require('dotenv').config()

//Mongoose Instance
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/maelord', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(require('cors')())
app.use(logger('dev'))

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: err
    })
  })
}


app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: {}
  })
})


app.listen(3000, () => {
    console.log('app running on port', 3000)
})


module.exports = app