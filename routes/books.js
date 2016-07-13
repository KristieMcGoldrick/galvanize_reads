var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var knex = require('../db/knex');
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET users listing. */
// router.get('/book', function(request, response, next) {
//   knex('book').select().then(function(book){
//     response.render('book', { book: book });
//   });
// });


module.exports = router;
