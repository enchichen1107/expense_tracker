// set db connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/record-list'
const mongoose = require('mongoose')

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db