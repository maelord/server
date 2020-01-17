'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../middleware/images')
      getAPI = require('../helpers/axios')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send('Ini home')
})
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS, getAPI)

router.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found')
})
module.exports = router