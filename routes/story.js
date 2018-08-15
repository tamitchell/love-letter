const express = require('express')
const router  = express.Router()
const storyController = require('../controllers/story')

//CREATE (2)
router.post('/', storyController.create)

//READ (1)

//Get all stories
router.get('/api', storyController.index)

//Get story by :id
router.get('/:id', storyController.show)

//UPDATE
router.put('/update', storyController.update)
//DELETE
router.delete('/delete', storyController.delete)

module.exports = router