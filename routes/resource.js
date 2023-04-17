var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ice_controller = require('../controllers/ice');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/ice', ice_controller.ice_create_post);
// DELETE request to delete Costume.
router.delete('/ice/:id', ice_controller.ice_delete);
// PUT request to update Costume.
router.put('/ice/:id', ice_controller.ice_update_put);
// GET request for one Costume.
router.get('/ice/:id', ice_controller.ice_detail);
// GET request for list of all Costume items.
router.get('/ice', ice_controller.ice_list);
module.exports = router;