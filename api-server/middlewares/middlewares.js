'use strict';

//Timestamp Middleware
/**
 *
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const requestTimeStamp = (request, response, next) => {
  request.requestTimeStamp = Date.now();
  next();
};

//Logging Middleware
/**
 *
 *
 * @param {*} message
 */
const logging = message => (message, request, response,  next) => {
  console.log(` ${message} :: ${request.path} :: ${request.method} :: ${request.requestTimeStamp}`);
  next();
};

//Validity Middleware
/**
 *
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const randomValid = (request, response, next ) => {
  let random = Math.random();
  random >= 0.5 ? request.valid = true : request.valid = false;
  next();
};

//404 Error Handler Middleware
/**
 *
 *
 * @param {*} request
 * @param {*} response
 */
const notFound = (request, response) => {
  response.status(404).send('404: Not Found');
  // response.statusMessage = '404: Not Found';
  // response.json({error: '404: Not Found'});
};

//Error Handling MiddleWare
/**
 *
 *
 * @param {*} error
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const errorHandler = (error, request, response, next) => {
  response.status(500).send(error);
  // response.statusMessage = 'Server Error';
  // response.json({error: error});
};

module.exports = {requestTimeStamp, logging, randomValid, notFound, errorHandler};