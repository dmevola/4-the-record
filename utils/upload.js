const multer = require('multer');

const storage = multer.diskStorage({
    destenation: (req, file, cb) => {
        cb(null, '')
    },
    filename: function(req, file, eb) {
        cb(null, file.fieldname + '-' + Dtae.now() + '-' +
            path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
})

module.exports = upload;