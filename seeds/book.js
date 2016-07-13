
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('book').insert({
          title: 'Think Python',
          topic: 'Python',
          description:'This is a wonderful step by step resource to start learning python. The book has so many amazing core functionality examples. There is also a bird on the cover.',
          cover: 'https://31.media.tumblr.com/f8fd8e9b367b898adb508efc223dda3f/tumblr_inline_n4cxalRcbw1qzb31u.jpg'
        }),
        knex('book').insert({
          title: 'You Don\'t Know JS: Scopes and Closures',
          topic: 'JavaScript',
          description:'Use this resource as a tool to become toe JavaScript expert you so desire to be. Scopes and closures are surefire ways to land a big, job, solve complex problems and kick booty all around. Plus, this guy writes a lot of good books.',
          cover: 'http://www.allitebooks.com/wp-content/uploads/1431/585553d851ea6b4-200x250.jpg'
        }),
        knex('book').insert({
          title: 'You Don\'t Know JS: Async & Performance',
          topic: 'JavaScript',
          description:'I don\'t have any clue what this book would be about, which is all the more reason to read it, learn it, and fully understand the content. ',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51Kb27EcNPL._SX331_BO1,204,203,200_.jpg'
        }),

        knex('book').insert({
          title: 'You Don\'t Know JS: ES6 & Beyond',
          topic: 'JavaScript',
          description:'ES6 is the new something for something in programming. Lots of the MDN examples are in ES6, which totally confuses me. Read this book, and you will be very happy.',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/41WeQ-Z4diL._SX331_BO1,204,203,200_.jpg'
        })
      ]);
    });
};
