// add Express and Express router
const express = require('express')
const router = express.Router()

// add router modules
const home = require('./modules/home')
const records = require('./modules/records')
const users = require('./modules/users')

// use routes
router.use('/records', records)
router.use('/users', users)
router.use('/', home)

// export routers
module.exports = router
