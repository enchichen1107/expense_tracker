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
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit record- show edit page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

// edit record- update edit data
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      record = Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete record
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// filter by categories
router.post('/filter', (req, res) => {
  const filterCategory = req.body.filter
  return Record.find({ category: { $regex: filterCategory, $options: 'i' } })
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
