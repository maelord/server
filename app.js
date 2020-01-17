'use strict'

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()

}
//Dependencies
const express = require('express')
const logger = require('morgan')
const routes = require('./routes/index')
const app = express()


//Mongoose Instance
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/maelord', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected!')
});

app.use(require('cors')())
app.use(logger('dev'))

app.use('/', routes);


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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