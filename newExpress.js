// Importing required modules
const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()
const bodyParser = require('body-parser')

// Middleware to parse JSON bodies
app.use(bodyParser.json())

// Root route
app.get('/', function (req, res) {
  res.send('WELCOME TO MY HOTEL')
})

// Import router files
const PersonRoute = require('./routes/PersonRoute')
const MenuRoute = require('./routes/MenuRoute')

// Middleware function to log requests
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request made to: ${req.originalUrl}`
  )
  next()
}

// Use the middleware before defining routes
app.use(logRequest)

// Use the imported routers
app.use('/person', PersonRoute)
app.use('/menu', MenuRoute)

// Define the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
