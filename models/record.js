// setting record schema and model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['household', 'commute', 'leisure', 'meal', 'else'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    min: 0,
    required: true
  }
})
module.exports = mongoose.model('Record', recordSchema)
