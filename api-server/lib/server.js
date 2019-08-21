'use strict';

const categoryRouter = require('../routes/category-routes');
const {requestTimeStamp, randomValid, notFound, errorHandler} = require('../middlewares/middlewares');

const express = require('express');
const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.json());

//Running the app
app.use('/categories', categoryRouter);
// app.use(requestTimeStamp);

//app.get('/categories', logging('message'), categoryRouter.get);
//app.post('/categories', logging('message'), valid, categoryRouter.post);
//Error Handlers
app.use(errorHandler);
app.use('*', notFound);

module.exports = {
  server: app,
  start: () => {
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  },
};

