const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/user');

router.post('/sign-up', authControllers.signUp);

module.exports = router;
