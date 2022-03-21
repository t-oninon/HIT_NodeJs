const authController = require('../controllers/auth.controller');
const router = require('express').Router();

module.exports = router.get('/', authController.login);