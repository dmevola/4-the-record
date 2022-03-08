var cloudinary = require('cloudinary').v2;

var uploade = () => {
    cloudinary.config({
        cloud_name: '',
        api_key: '',
        api_secret: ''

    });
}

module.exports = uploade;