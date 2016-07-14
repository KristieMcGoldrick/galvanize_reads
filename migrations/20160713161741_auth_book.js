
exports.up = function(knex, Promise) {
  return knex.schema.createTable('auth_book', function(table) {
   table.increments();
   table.integer('author_id').references('author.id');
   table.integer('book_id').references('book.id');
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('auth_book');
};
