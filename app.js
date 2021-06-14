// init packages
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Record = require('./models/record')
const app = express()
const port = 3000

// connect ro mongodb
mongoose.connect('mongodb://localhost/record-list', { useNewUrlParser: true, useUnifiedTopology: true })

// get db connection status
const db = mongoose.connection
// connection failed
db.on('error', () => {
  console.log('mongodb error!')
})
// connection success
db.once('open', () => {
  console.log('mongodb connected!')
})

// set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// preprocess before entering routers
app.use(bodyParser.urlencoded({ extended: true }))

// set front page route
app.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.error(error))
})

// set create record route- show create page
app.get('/records/create', (req, res) => {
  return res.render('create')
})

// set create record route- post created data
app.post('/records', (req, res) => {
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// set port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
