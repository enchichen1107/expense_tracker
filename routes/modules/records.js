// add Express and Express router
const express = require('express')
const router = express.Router()

// add Record model
const Record = require('../../models/record')

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
  let totalAmount = 0
  const filterCategory = req.body.filter
  return Record.find({ category: { $regex: filterCategory, $options: 'i' } })
    .lean()
    .then(records => {
      records.forEach(function sumTotal (record) { totalAmount += record.amount })
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.log(error))
})

// export router
module.exports = router
