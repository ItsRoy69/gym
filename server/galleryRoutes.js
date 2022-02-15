const express = require('express')
const router = express.Router()
const { addImage } = require('./galleryController')

// router.post('/add/photo', addImage);

router.get('/', (req, res)=>{
  res.send("hello")
})

module.exports = router;
