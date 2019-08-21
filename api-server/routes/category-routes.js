'use strict';
const express = require('express');
const router = express.Router();

let db = [];

// Route to Get All Categories
router.get('/', (request, response) => {
  let count = db.length;
  let results = db;
  response.json({ count, results });
});

// Route to Create a Category
router.post('/', (request, response) => {
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
