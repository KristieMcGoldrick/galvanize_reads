
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
        }),
        knex('author').insert({
          name: 'Allen B. Downey',
          bio: 'Allen is a professor of Computer Science at Olin College of Engineering. He has taught at many colleges, but his favorite is U.C. Berkeley. He also received his Ph.D in Computer Science at Berkeley. He lived in the Oakland Hills, and fell in love with a nice girl from the bay.',
          prof_pic: 'https://d3i5bpxkxvwmz.cloudfront.net/resized/images/remote/http_s.eeweb.com/featured/member/2012/02/10/image1-1322677337-1328897850_420_420_s_c1.png'
        }),
        knex('author').insert({
          name: 'Anna Ravenscroft',
          bio: 'Anna is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, and disaster preparedness. She also develops web applications for therapy, learning and fitness.She enjoys hiking, traveling, and learning new languages.',
          prof_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFmx-XZ9EZYX8s5UTOJV4hvEMA65yj_A1G9JIdDo3OzSyxNaNRHNFRPc'
        }),
        knex('author').insert({
          name: 'Kyle Simpson',
          bio: 'Kyle writes lots of books about JavaScript. He refers to himself as an Open Web Evangelist. He is a leader in the development world.',
          prof_pic: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRoAxJYxKizEOpeejNysd7soJ5azbgShxoQLKtaGRmeWkQaJe9H'
        }),
        knex('author').insert({
          name: 'Jim Jones',
          bio: 'Jim was an American cult leader. He was very influential in his field. Many people died in his honor. Don\'t drink the cool-aid.',
          prof_pic: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhynVAGRP1hL5kbozI23FMlcywAv2uDKld5G9NwGZvVZm3Jm2mdeq_kC49cw'
        })
      ]);
    });
};
