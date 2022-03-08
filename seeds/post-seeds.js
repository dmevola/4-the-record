const { Post } = require('../models');

const postdata = [{
        genre: 'pop',
        artist: 'Everly Brothers',
        song: 'Bye Bye Love',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 10
    },
    {
        genre: 'pop',
        artist: 'Queen',
        song: 'Bohemian Rhapsody',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 8
    },
    {
        genre: 'pop',
        artist: 'Janet Jackson',
        song: 'Escapade',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 1
    }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;