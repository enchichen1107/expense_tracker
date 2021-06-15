// init packages
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
require('handlebars-helpers')()
// require('handlebars-dateformat')()
// const hbs = require('hbs')
// exphbs.registerHelper('dateFormat', require('handlebars-dateformat'))
const app = express()
const port = 3000

// set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: require('handlebars-dateformat') }))
app.set('view engine', 'hbs')

const hbs = exphbs.create({})
hbs.handlebars.registerHelper('dateFormat', require('handlebars-dateformat'))

// preprocess before entering routers
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// set port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
