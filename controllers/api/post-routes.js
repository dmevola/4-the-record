const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const cloudinary = require('../../utils/upload');



// get all users
router.get('/', (req, res) => {
    console.log('===================');
    Post.findAll({
            attributes: [
                'id',
                'genre',
                'artist',
                "song",
                'image_name',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'genre',
                'artist',
                "song",
                'image_name',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username', 'id']
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Post.create({
            genre: req.body.genre,
            artist: req.body.artist,
            song: req.body.song,
            image_name: req.body.image,
            user_id: req.session.user_id
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/upload', (req, res) => {
    cloudinary.uploader.upload('../../public/images/tetst.jpg')
        .then(result => {
            console.log(result)
        })
        // cloudinary.uploader.upload(req.file.path, {
        //         public_id: "newpic",
        //         width: 500,
        //         height: 500,
        //         crop: 'fill'
        //     })
        //     .then(result => {
        //         console.log(result);
        //     })

})

router.put('/:id', (req, res) => {
    Post.update({
            genre: req.body.genre,
            artist: req.body.artist,
            song: req.body.song,
            image_name: req.body.image_name
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;