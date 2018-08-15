const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/login', userController.login)
router.post('/login', userController.createLogin)
router.get('/signup', userController.signup)
router.post('/signup', userController.createSignup)
router.get('/logout', userController.logout)


module.exports = router;