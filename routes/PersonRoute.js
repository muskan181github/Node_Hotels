const express = require('express')
const router = express.Router()
const Person = require('../models/Person')
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newPerson = new Person(data)
    const response = await newPerson.save()
    console.log('data saved')
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await Person.find()
    console.log('data fetch')
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newPerson = new Person(data)
    const response = await newPerson.save()
    console.log('data saved')
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType
    if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await Person.find({ work: workType })
      console.log('Response Fetched')
      res.status(200).json(response)
    } else {
      res.status(404).json({ error: 'invalid work datatype' })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updatePersonData = req.body
    const response = await Person.findByIdAndUpdate(id, updatePersonData, {
      new: true,
      runValidators: true
    })
    if (!response) {
      return res.status(404).json({ error: 'Person not found' })
    }
    console.log('Response Updated')
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const response = await Person.findByIdAndDelete(id)
    if (!response) {
      return res.status(404).json({ error: 'Person not found' })
    }
    console.log('Data delete')
    res.status(200).json({ message: 'person deleted successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
module.exports = router
