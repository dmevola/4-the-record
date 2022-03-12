const { Post } = require('../models');

const postdata = [{
        genre: 'pop',
        artist: 'Alanis Morisette',
        title: 'Jagged Little Pill',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1647115539/zux4gyoadppge4bnvvch.jpg',
        user_id: 10
    },
    {
        genre: 'rock',
        artist: 'Jimi Hendrix',
        title: 'Are You Experienced?',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1647116266/pyjrgashfa3wuw0lyftf.jpg',
        user_id: 8
    },
    {
        genre: 'pop',
        artist: 'Michael Jackson',
        title: 'Thriller',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1647116284/fgo52r7jtmon942pqrhw.png',
        user_id: 1
    },
    {
        genre: 'r&b',
        artist: 'Stevie Wonder',
        title: 'Songs in the Key of Life',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1647116550/gyr4vqpuykx433fxzcvx.jpg',
        user_id: 6
    },
    {
        genre: 'rock',
        artist: 'Fleetwood Mac',
        title: 'Rumours',
        image_name: 'https://res.cloudinary.com/dbepgsyve/image/upload/v1647116226/njboctgpiv2e8lmyspdz.png',
        user_id: 8
    }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;