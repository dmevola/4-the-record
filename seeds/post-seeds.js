const { Post } = require('../models');

const postdata = [{
        genre: 'pop',
        artist: 'Alanis Morisette',
        title: 'Jagged Little Pill',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 10
    },
    {
        genre: 'rock',
        artist: 'Jimi Hendrix',
        title: 'Are You Experienced?',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 8
    },
    {
        genre: 'pop',
        artist: 'Michael Jackson',
        title: 'Thriller',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 1
    },
    {
        genre: 'r&b',
        artist: 'DAngelo',
        title: 'Black Messiah',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 6
    },
    {
        genre: 'rock',
        artist: 'Fleetwood Mac',
        title: 'Rumours',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1646767969/rb2gmdnonkletfqenmbp.jpg',
        user_id: 8
    }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;