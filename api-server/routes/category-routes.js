'use strict';
const express = require('express');
const router = express.Router();
const {requestTimeStamp, logging, randomValid} = require('../middlewares/middlewares');

let db = [];

// Route to Get All Categories
router.get('/', requestTimeStamp, logging('ALL CATEGORIES'), (request, response) => {
  let count = db.length;
  let results = db;
  response.json({ count, results });
});

// Route to Create a Category
router.post('/', requestTimeStamp, logging('ADD CATEGORIES'), randomValid, (request, response) => {
  let record = request.body;
  record.id = Math.random();
  if (request.valid) {
    db.push(record);
    response.json(record);
  } else {
    response.status(500);
  }
});

module.exports = router;
