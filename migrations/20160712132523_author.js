
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', function (table){
    table.increments();
    table.string('name');
    table.text('bio');
    table.string('prof_pic')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author');
};
