const express = require('express')
const router  = express.Router()
const storyController = require('../controllers/story')

//CREATE (2)
router.post('/api', storyController.create)

//READ (1)

//Get all stories
router.get('/api', storyController.index)

//Get story by :id
router.get('/api/:id', storyController.show)

//UPDATE
router.put('/update/:id', storyController.update)
//DELETE
router.delete('/delete/:id', storyController.delete)

module.exports = router