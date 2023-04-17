var express = require('express');
const ice_controlers= require('../controllers/ice');
var router = express.Router();

/* GET costumes */
router.get('/', ice_controlers.ice_view_all_Page );
module.exports = router;
