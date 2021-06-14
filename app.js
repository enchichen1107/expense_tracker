// init packages
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// connect ro mongodb
mongoose.connect('mongodb://localhost/record-list', { useNewUrlParser: true, useUnifiedTopology: true })

// get db connection status
const db = mongoose.connection
// connection failed
db.on('error', () => {
  console.log('mongodb error!')
})
// connection success
db.once('open', () => {
  console.log('mongodb connected!')
})

// setting front page route
app.get('/', (req, res) => {
  res.send('hello world')
})

// setting port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
