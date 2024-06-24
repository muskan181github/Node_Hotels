const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.json({ message: 'Hello Welcome to My Hotel' })
})
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
const personRoutes=require('./routes/PersonRoute');
const menuItemRoute=require('./routes/MenuRoute')

app.use('/person',personRoutes);
app.use('/menu',menuItemRoute);