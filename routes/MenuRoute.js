const express = require('express')
const router = express.Router()

const Menu = require('../models/Menu')
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newMenu = new Menu(data)
    const response = await newMenu.save()
    console.log('data saved')
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
router.get('/', async (req, res) => {
  try {
    const data = await Menu.find()
    console.log('data fetch')
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/:tasteType', async (req, res) => {
  try {
    const tasteType = req.params.tasteType
    if (tasteType == 'Spicy' || tasteType == 'Sour') {
      const response = await Menu.find({ taste: tasteType })
      console.log('response fetched')
      res.status(200).json({ response })
    } else {
      res.status(404).json({ error: 'invalid work datatype' })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
module.exports = router
