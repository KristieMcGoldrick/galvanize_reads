var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');
var queries = require('../db/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* CLICK on AUTHORS and GET List of AUTHORS */
router.get('/author', function(req, res, next) {
  knex('author').select().then(function(author){
  res.render('author', {author: author});
  });
});

/* CLICK on ADD AUTHOR and GET FORM*/
router.get('/author/new', function(request, response, next) {
  response.render('add-author');
});

/*POST ADDED Author to DB and to AUTHOR page*/
router.post('/author', function(request, response, next) {
  var author = {
  name: request.body.name,
    bio: request.body.bio,
    prof_pic: request.body.prof_pic
  };
  queries.addAuthor(author).then(function(author) {
    response.redirect('/author');
  });
});
/* DELETE on AUTHOR*/
// router.get('/delete/:id', function(request, response, next) {
//   queries.getAuthor(request.params.id).then(function(author) {
//     response.render('author/delete-author', { author: author });
//   });
// });

// router.post('/', function(request, response, next) {
//   var author = {
//     name: request.body.name
//   };
//   queries.addAuthor(author).then(function(author) {
//     response.redirect('/author');
//   });
// });

// router.delete('/:id', function(request, response, next) {
//   queries.removeAuthor(request.params.id).then(function() {
//     response.redirect('/author');
//   });
// });
/*Click on HYPERLINK AUTHOR NAME and get their DETAIL*/
router.get('/:id', function(req, res, next) {
  knex('author').where({id: req.params.id}).first().then(function(data) {
    res.render('detail', {author: data});
  })
});
/*Click on HYPERLINK EDIT AUTHOR and update*/
router.get('/:id/edit', function(req, res, next) {
  knex('author').where({id: req.params.id}).first().then(function(data) {
    res.render('edit', {author: data})
  })
});

router.post('/:id/edit', function(req, res, next) {
  knex('author').where({id: req.params.id}).update(req.body).then(function () {
    res.redirect('/' + req.params.id);
  })
});

/* Click on BOOKS and pull up the books page*/
router.get('/book', function(request, response, next) {
  knex('book').select().then(function(data){
    response.render('book', { book: data });
  });
});

/* CLICK on ADD BOOK and GET FORM*/
router.get('/book/new', function(request, response, next) {
  response.render('add-book');
});


/*POST ADDED Book to DB and to BOOK page*/
router.post('/book', function(request, response, next) {
  var book = {
  title: request.body.title,
    topic: request.body.topic,
    description: request.body.description,
    cover: request.body.cover
  };
  queries.addBook(book).then(function(book) {
    response.redirect('/book');
  });
});
module.exports = router;
