// add Express and Express router
const express = require('express')
const router = express.Router()

// add router modules
// add home module
const home = require('./modules/home')

// if request url matches '/', direct to home module
router.use('/', home)

// add records module
const records = require('./modules/records')

// if request url matches '/records', direct to records module
router.use('/records', records)

// export routers
module.exports = router
