var express = require('express');
const ice_controlers= require('../controllers/ice');
var router = express.Router();

/* GET costumes */
router.get('/', ice_controlers.ice_view_all_Page );

/* GET detail costume page */
router.get('/detail', ice_controlers.ice_view_one_Page);

/* GET create costume page */
router.get('/create', ice_controlers.ice_create_Page);

/* GET create update page */
router.get('/update', ice_controlers.ice_update_Page);

/* GET delete costume page */
router.get('/delete', ice_controlers.ice_delete_Page);


module.exports = router;
