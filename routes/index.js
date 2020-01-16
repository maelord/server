'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../middleware/images')
const ImageController = require('../controllers/imageController')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' })
})
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  ImageController.storeImage,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  }
  )


module.exports = router