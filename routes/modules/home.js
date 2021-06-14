// add Express and Express router
const express = require('express')
const router = express.Router()

// add Record model
const Record = require('../../models/record')

// show front page
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.error(error))
})

// export router
module.exports = router
