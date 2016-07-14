
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('auth_book').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('auth_book').insert({
          author_id: 4,
          book_id: 1
        }),
        knex('auth_book').insert({
          author_id: 6,
          book_id: 2
        }),
        knex('auth_book').insert({
          author_id: 6,
          book_id: 3
        }),
        knex('auth_book').insert({
          author_id: 6,
          book_id: 4
        })
      ]);
    });
};
