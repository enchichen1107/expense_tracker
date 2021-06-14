// init settings
const mongoose = require('mongoose')
const Record = require('../record')
const recordList = require('../../record.json')

// setting record seeds
mongoose.connect('mongodb://localhost/record-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  recordList.records.forEach(record => {
    Record.create(record)
  })
  console.log('records added!')
})
