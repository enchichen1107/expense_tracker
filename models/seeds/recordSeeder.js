// add record seeds
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Record = require('../record')
const User = require('../user')
const Category = require('../category')
const recordList = require('../../record.json').records
const userList = require('../../user.json')
const db = require('../../config/mongoose')
const categories = []

// add seed data
db.once('open', () => {
  Promise.all(
    userList.map(seedUser => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(seedUser.password, salt))
        .then(hash => {
          return User.create({
            name: seedUser.name,
            email: seedUser.email,
            password: hash
          })
            .catch(err => console.log(err))
        })

        .then(user => {
          const userRecords = seedUser.userRecords.map(item => {
            return Object.assign(recordList[item - 1], { userId: user._id })
          })
          return userRecords
        })

        .then(async userRecords => {

          await Promise.all(userRecords.map(async item => {
            const ref = await Category.findOne({ name: item.category }).lean().catch(error => console.log(error))
            categories.push(ref)
          })
          )

          let idx = 0
          return userRecords.map(item => {
            return Object.assign(item, { categoryId: categories[idx++]._id })
          })
        })

        .then(userCategoryRecords => {
          return Record.create(userCategoryRecords)
            .catch(err => console.log(err))
        })
    })
  )
    .then(() => {
      console.log('done.')
      process.exit()
    })
})
