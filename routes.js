const express = require('express')
const router  = express.Router()
const controller = require('./controller.js')
//CREATE (2)
router.get('/new', controller.new)
router.post('/create', controller.create)

//READ (1)
router.get('/', controller.index)
//UPDATE
router.put('/update', controller.update)
//DELETE
router.delete('/delete', controller.delete)

module.exports = router