'use strict';

const express = require('express');

const categoryRouter = require('../routes/category-routes');
const requestTimeStamp = require('../middlewares/requestTimeStamp');
const randomValid = require('../middlewares/randomValid');
const logging = require('../middlewares/logging');
const {handleError, notFound} = require('../middlewares/error-handlers');

const app = express();

const expressSwagger = require('express-swagger-generator')(app);

let PORT = process.env.PORT || 3000;

//Routes
app.use(express.json());
app.use(requestTimeStamp);

// app.use('/categories', categoryRouter);
app.get('/categories', logging('message'), categoryRouter.get);
app.post('/categories', logging('message'), randomValid, categoryRouter.post);

//Error Handlers
app.use(handleError);
app.use('*', notFound);

let options = {
  swaggerDefinition: {
    info: {
      description: 'Express Routing Server',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/v1',
    produces: [
      "application/json",
      "application/xml"
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/**/*.js'] //Path to the API handle folder
};

module.exports = {
  server: app,
  start: () => {
    expressSwagger(options);
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  },
};

