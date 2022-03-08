const router = require('express').Router();
const cloudinary = require('../utils/upload')

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.post('/upload', (req, res) => {
    console.log(req.file)
    cloudinary.uploader.upload(req.file)
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

module.exports = router;