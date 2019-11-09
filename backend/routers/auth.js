const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth');

router.post('/sign-in', authControllers.signIn);

module.exports = router;
