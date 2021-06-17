// add Express and Express router
const express = require('express')
const router = express.Router()

// add models
const Record = require('../../models/record')
const Category = require('../../models/category')

// show front page
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      let totalAmount = 0
      Category.find()
        .lean()
        .then(categories => {
          records.forEach(function sumTotal (record) {
            categories.forEach(function mapIcons (category) {
              if (category.name === record.category) { record.icon = category.icon }
            })
            totalAmount += record.amount
          })
          res.render('index', { records, totalAmount })
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

// export router
module.exports = router
