// add Express and Express router
const express = require('express')
const router = express.Router()

// add models
const Record = require('../../models/record')
const Category = require('../../models/category')

// create record- show create page
router.get('/create', (req, res) => {
  return res.render('create')
})

// create record- post created data
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, date, category, amount } = req.body
  return Record.create({ name, date, category, amount, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit record- show edit page
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

// edit record- update edit data
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => {
      record = Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete record
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// filter by categories
router.post('/filter', (req, res) => {
  const userId = req.user._id
  const filterCategory = req.body.filter
  return Record.find({ category: { $regex: filterCategory, $options: 'i' }, userId })
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
          res.render('index', { records, totalAmount, filterCategory })
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

// export router
module.exports = router
