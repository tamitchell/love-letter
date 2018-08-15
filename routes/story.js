const express = require('express')
const router  = express.Router()
const storyController = require('../controllers/story')

//CREATE (2)
router.get('/new', storyController.new)
router.post('/create', storyController.create)

//READ (1)
router.get('/', storyController.index)
//UPDATE
router.put('/update', storyController.update)
//DELETE
router.delete('/delete', storyController.delete)

module.exports = router