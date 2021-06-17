// add record seeds
const Record = require('../record')
const recordList = require('../../record.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.insertMany(recordList.records).then(
    () => {
      console.log('records added!')
      return db.close()
    }
  ).then(() => {
    console.log('database connection closed...')
  })
})
