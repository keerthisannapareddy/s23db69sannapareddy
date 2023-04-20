var ice = require('../models/ice');
// List of all Costumes
exports.ice_list = function(req, res) {
res.send('NOT IMPLEMENTED: ice list');
};
// for a specific Costume.
exports.ice_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ice detail: ' + req.params.id);
};
// for a specific Costume.
exports.ice_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await ice.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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
//Handle Costume update form on PUT.
exports.ice_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await ice.findById( req.params.id)
// Do updates of properties
if(req.body.ice_name)
toUpdate.ice_name = req.body.ice_name;
if(req.body.number_of_scoops) toUpdate.number_of_scoops = req.body.number_of_scoops;
if(req.body.ice_price) toUpdate.ice_price = req.body.ice_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle Costume delete on DELETE.
exports.ice_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await ice.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.ice_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await ice.findById( req.query.id)
    res.render('icedetail',
    { title: 'ice Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.ice_create_Page = function(req, res) {
console.log("create view")
try{
res.render('icecreate', { title: 'ice Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a costume.
// query provides the id
exports.ice_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await ice.findById(req.query.id)
    res.render('iceupdate', { title: 'ice Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.ice_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await ice.findById(req.query.id)
res.render('icedelete', { title: 'ice Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};