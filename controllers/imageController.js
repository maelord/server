const Image = require('../models/image')


class ImageController {
    static storeImage(req, res, next) {
        
        console.log(req.file.cloudStoragePublicUrl)
        Image.create({
            imageLink: req.file.cloudStoragePublicUrl
        })
            .then(stored => {
                console.log('Upload successful')
                next()
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }       
}

module.exports = ImageController