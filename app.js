const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

// mongoose.connect('mongodb://localhost/practicaBlogs')
// .then(() => console.log("Db connect"))
// .catch(err => console.log(err))

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening on port port!`))