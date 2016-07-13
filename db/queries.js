var knex = require('./knex');

module.exports = {

  addAuthor: function(author) {
    return knex('author').insert(author);
  },

  getAuthor: function(id) {
    return knex('author').where({ id: id }).select().first();
  },

  removeAuthor: function(id) {
  return knex('author').where({ id: id }).del();
},
}
