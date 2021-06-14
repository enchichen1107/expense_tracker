// add record seeds
const Record = require('../record')
const recordList = require('../../record.json')
const db = require('../../config/mongoose')
db.once('open', () => {
  recordList.records.forEach(record => {
    Record.create(record)
  })
  console.log('records added!')
})
