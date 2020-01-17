'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../middleware/images')
const ImageController = require('../controllers/imageController')


router.get('/', (req, res, next) => {
  res.send('Ini home')
})
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS, ImageController.storeImage)


router.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found')
})
module.exports = router