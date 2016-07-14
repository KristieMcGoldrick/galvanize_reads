exports.seed = function(knex, Promise) {
      return knex.raw('TRUNCATE auth_book, book, author RESTART IDENTITY CASCADE')
      .then(function() {
        return knex('auth_book').del()
      .then(function() {
        return knex('book').del()
      .then(function() {
        return knex('author').del();
      });
    });
  });
};
