
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
  });

router.use('/user', require('./user'));
router.use('/story', require('./story'))

router.all('*', (req, res) => {
    res.status(400).send();
  });
  
  module.exports = router;