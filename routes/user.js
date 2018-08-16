const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/login', userController.login)
router.get('/signup', userController.signup)
router.get('/logout', userController.logout)


module.exports = router;