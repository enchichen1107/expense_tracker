// init packages
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
require('handlebars-helpers')()
const usePassport = require('./config/passport')

const app = express()
const PORT = process.env.PORT || 8000

// set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: require('handlebars-dateformat') }))
app.set('view engine', 'hbs')

const hbs = exphbs.create({})
hbs.handlebars.registerHelper('dateFormat', require('handlebars-dateformat'))

// set session
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

// preprocess before entering routers
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
usePassport(app)
app.use(routes)

// set port
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
