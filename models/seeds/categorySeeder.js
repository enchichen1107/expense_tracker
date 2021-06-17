// add category seeds
const Category = require('../category')
const categoryList = require('../../category.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.insertMany(categoryList.categories).then(
    () => {
      console.log('categories added!')
      return db.close()
    }
  ).then(() => {
    console.log('database connection closed...')
  })
})
