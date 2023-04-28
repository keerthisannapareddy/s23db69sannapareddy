var express = require('express');
const ice_controlers= require('../controllers/ice');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

//GET request for one soaps.
router.get('/', ice_controlers.ice_view_all_Page);
router.get('/detail',secured, ice_controlers.ice_view_one_Page);
router.get('/create', secured,ice_controlers.ice_create_Page);

router.get('/delete',secured, ice_controlers.soaps_delete_Page);

router.get('/update', secured,uice_controlers.soaps_update_Page);

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
