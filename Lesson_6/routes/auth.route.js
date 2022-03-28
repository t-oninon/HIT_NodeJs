const authController = require('../controllers/auth.controller');
const router = require('express').Router();

router.get('/login', authController.login);
router.get('/forget-password', authController.forgetPassword);
router.get('/change-password', authController.changePassword);

module.exports = router