const Image = require('../models/image')

class ImageController {
    static storeImage(req, res) {
        ('you hit storeImage')
        console.log(req.file.cloudStoragePublicUrl)
        Image.create({
            imageLink: req.file.cloudStoragePublicUrl
        })
            .then(stored => {
                res.status(200).json(`image stored successfully`)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }       
}

module.exports = ImageController