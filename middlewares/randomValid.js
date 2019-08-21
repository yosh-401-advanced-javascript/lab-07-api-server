'use strict';

module.exports = (request, response, next ) => {
  let random = Math.random();
  random >= 0.5 ? request.valid = true : request.valid = false;
  next();
};