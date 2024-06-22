const mongoose = require('mongoose')
require('dotenv').config()

// Define the MongoDB connection URL
const mongodbUrl = process.env.DB_URL

// Set up mongoose
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true, // corrected typo here
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
  console.log('Connected to MongoDB server')
})

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server')
})

db.on('error', err => {
  console.error('Error connecting to MongoDB server', err)
})

module.exports = db
