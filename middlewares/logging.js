'use strict';

module.exports = message => (message, request, response,  next) => {
  console.log(` ${message} :: ${request.path} :: ${request.method} :: ${request.requestTimeStamp}`);
  next();
};

