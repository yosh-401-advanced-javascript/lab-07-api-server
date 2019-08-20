'use strict';
const serverRouter = require('../routes/category-routes');
const express = require('express');
const app = express();
app.use('/', serverRouter);


let PORT = process.env.PORT || 3000;

app.use(express.json());

//Timestamp  Middleware
const requestTimeStamp = (request, responce, next) => {
  request.requestTimeStamp = Date.now();
  next();
};


//Logging for Time Stamp
const logging = (message, request, response,  next) => {
  console.log(` ${message} :: ${request.path} :: ${request.method} :: ${request.requestTimeStamp}`);
  next();
};


//create random Boolean
const randomValid = (request, response, next ) => {
  let random = Math.random();
  random >= 0.5 ? request.valid = true : request.valid = false;
  next();
};


//404 Error Handler Middleware
const notFound = (request, response) => {
  response.status(404);
  response.statusMessage = '404: Not Found';
  response.json({error: '404: Not Found'});
};


//Error Handling MiddleWare
const errorHandler = (error, request, response) => {
  response.status(500);
  response.statusMessage = 'Server Error';
  response.json({error: error});
};


//Error Handlers
app.use('*', notFound);
app.use(errorHandler());





module.exports = {
  app,
  start: () => {
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  },
};

