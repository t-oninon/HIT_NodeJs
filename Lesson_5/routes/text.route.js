const { encode, decode } = require('../controllers/text.controller');
const router = require('express').Router();

router.post("/encode", encode);
router.post("/decode", decode);

module.exports = router;