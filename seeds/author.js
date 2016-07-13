
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('author').insert({
          name: 'Alex Martelli',
          bio: 'Alex Martelli is a member of the Python Software Foundation and works as Uber Tech Lead for Google, Inc., in CA. He has written about the programming language Python. He enjoys theater and is an active participant in open mic events in San Francsico.',
          prof_pic: 'https://www.gravatar.com/avatar/e8d5fe90f1fe2148bf130cccd4dc311c?s=328&d=identicon&r=PG'
        }),
        knex('author').insert({
          name: 'Bonnie Eisenman',
          bio: 'Bonnie is a software engineer at Twitter in New York City, and obtained a degree in CS from Princeton. She is the author of Learning React Native. She is also a hack-a-thon master. She enjoys knitting and singing karoke.',
          prof_pic: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSfyd5xq2pV6ckW_D_hmZDS9mbE9KXPFw8q_QeZyqkSP-Lp2dGi7HX2w'
        }),
        knex('author').insert({
          name: 'Steve Holdman',
          bio: 'Steve is a consultant providing expertise on everything regarding web systems and prgramming languages. He is also a mastermid at security. He is from the UK, but currently resides in portland. He enjoys spending time with family, learning about beer, and cooking.',
          prof_pic: 'https://d8142femxnlg1.cloudfront.net/cropped-profile-photos/eef54827f747b84dac359a287dd03c7f11da4086-s300.jpeg'
        })
      ]);
    });
};
