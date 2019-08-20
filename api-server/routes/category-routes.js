'use strict';
const express = require('express');
let router = express.Router();

let db = [];


// Route to Get All Categories
router.get('/categories', logging('ALL CATEGORIES'), (request, response, next) => {
  let count = db.length;
  let results = db;
  response.json({ count, results });
});


// Route to Create a Category
router.post('/categories', logging('ADD CATEGORIES'), randomValid, (request, response, next) => {
  let record = request.body;
  record.id = Math.random();
  if(request.valid) {
    db.push(record);
    response.json(record);
  }else{
    response.status(500);
  }
});

module.exports = router;
