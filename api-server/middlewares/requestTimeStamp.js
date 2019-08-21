'use strict';

module.exports =  (request, response, next) => {
  request.requestTimeStamp = Date.now();
  next();
};