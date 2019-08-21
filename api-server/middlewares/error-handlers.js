'use strict';

const handleError = (error, request, response, next) => {
  response.status(500).send(error);
};

//404 Error Handler Middleware
const notFound = (request, response) => {
  response.status(404).send('404: Not Found');
};

module.exports = {handleError, notFound};