const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const galleryRoutes = require('./galleryRoutes')

const app = express()

//middleware

app.use(cors())
app.use(bodyParser.json())


//routes

app.use('/api', galleryRoutes);

// connection with DB
mongoose.connect('mongodb://localhost:27017/gallery',{
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewurlParser: true
}).then(()=>console.log('CONNECTED WITH DB'))
.catch(()=>console.log('NOT CONNECTED WITH DB'))

const port = 5000;


app.listen(port, ()=>{
  console.log(`App is running at ${port}`);
})
