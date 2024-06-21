const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('WELCOME TO MY HOTEL')
})
//import the router files
const PersonRoute = require('./routes/PersonRoute')
const MenuRoute = require('./routes/MenuRoute')
//use the router
app.use('/person', PersonRoute)
app.use('/menu', MenuRoute)
const PORT=process.env.port||3000;

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}`)
})
//comment the code
