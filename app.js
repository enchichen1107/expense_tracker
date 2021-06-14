// init packages
const express = require('express')
const app = express()
const port = 3000

// setting front page route
app.get('/', (req, res) => {
  res.send('hello world')
})

// setting port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
