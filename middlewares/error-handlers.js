'use strict';
/**
 *
 *
 * @param {*} error
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const handleError = (error, request, response, next) => {
  response.status(500).send(error);
};

/**
 *
 *
 * @param {*} request
 * @param {*} response
 */
const notFound = (request, response) => {
  response.status(404).send('404: Not Found');
};

module.exports = {handleError, notFound};