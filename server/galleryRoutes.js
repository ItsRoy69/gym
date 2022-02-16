const express = require('express')
const router = express.Router()
const { addImage } = require('./galleryController')

router.post('/add/photo', addImage);

module.exports = router;
