'use strict';

//Timestamp Middleware
const requestTimeStamp = (request, response, next) => {
  request.requestTimeStamp = Date.now();
  next();
};

//Logging Middleware
const logging = message => (message, request, response,  next) => {
  console.log(` ${message} :: ${request.path} :: ${request.method} :: ${request.requestTimeStamp}`);
  next();
};

//Validity Middleware
const randomValid = (request, response, next ) => {
  let random = Math.random();
  random >= 0.5 ? request.valid = true : request.valid = false;
  next();
};

//404 Error Handler Middleware
const notFound = (request, response) => {
  response.status(404).send('404: Not Found');
};

//Error Handling MiddleWare
const errorHandler = (error, request, response) => {
  response.status(500).send(error);
};

module.exports = {requestTimeStamp, logging, randomValid, notFound, errorHandler};