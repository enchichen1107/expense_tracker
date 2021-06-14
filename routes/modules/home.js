// add Express and Express router
const express = require('express')
const router = express.Router()

// add Record model
const Record = require('../../models/record')

// show front page
router.get('/', (req, res) => {
  let totalAmount = 0
  Record.find()
    .lean()
    .then(records => {
      records.forEach(function sumTotal (record) { totalAmount += record.amount })
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.error(error))
})

// export router
module.exports = router
