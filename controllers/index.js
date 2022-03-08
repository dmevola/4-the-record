const router = require('express').Router();
const cloudinary = require('../utils/upload')
const Formidable = require('formidable');

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// router.post('/upload', (req, res) => {

//     cloudinary.uploader.upload('https://images.freeimages.com/images/large-previews/c49/compact-disk-2-1165052.jpg')
//         .then(result => {
//             console.log(result)
//         })

//     console.log(req.param);
//     cloudinary.uploader.upload(req.file, {
//             public_id: "newpic",
//             width: 500,
//             height: 500,
//             crop: 'fill'
//         })
//         .then(result => {
//             console.log(req);
//         })


// })

module.exports = router;