const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageLink: String
});

const Image = mongoose.model('Image', imageSchema)

module.exports = Image