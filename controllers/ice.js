var ice = require('../models/ice');
// List of all Costumes
exports.ice_list = function(req, res) {
res.send('NOT IMPLEMENTED: ice list');
};
// for a specific Costume.
exports.ice_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ice detail: ' + req.params.id);
};
// // Handle Costume create on POST.
// exports.ice_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: ice create POST');
// };
// Handle Costume delete form on DELETE.
exports.ice_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ice delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.ice_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ice update PUT' + req.params.id);
};
// List of all Costumes
exports.ice_list = async function(req, res) {
    try{
    theice = await ice.find();
    res.send(theice);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    // VIEWS
// Handle a show all view
   exports.ice_view_all_Page = async function(req, res) {
    try{
    theice = await ice.find();
    res.render('ice', { title: 'ice Search Results', results: theice });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Costume create on POST.
exports.ice_create_post = async function(req, res) {
console.log(req.body)
let document = new ice();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.ice_name = req.body.ice_name;
document.number_of_scoops = req.body.number_of_scoops;
document.ice_price = req.body.ice_price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};