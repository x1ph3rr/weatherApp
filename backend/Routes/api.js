const express = require("express");
const router = express.Router();
const userControl = require('../Controllers/userController');

router.post('/register', userControl.register);
router.post('/login', userControl.login);

module.exports = router;