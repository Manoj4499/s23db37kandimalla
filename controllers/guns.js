var guns = require('../models/guns');
// List of all gunss
exports.guns_list = async function(req, res) {
    try{
    theguns = await guns.find();
    res.send(theguns);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific guns.

exports.guns_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await guns.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle guns create on POST.
exports.guns_create_post = async function(req, res) {
    console.log(req.body)
    let document = new guns();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"guns_type":"goat", "cost":12, "size":"large"}
    document.guns_type = req.body.guns_type;
    document.guns_name = req.body.guns_name;
    document.guns_cost = req.body.guns_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle guns delete form on DELETE.
exports.guns_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await guns.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle guns update form on PUT.
exports.guns_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await guns.findById( req.params.id)
    // Do updates of properties
    if(req.body.guns_type)
    toUpdate.guns_type = req.body.guns_type;
    if(req.body.guns_name) toUpdate.guns_name = req.body.guns_name;
    if(req.body.guns_cost) toUpdate.guns_cost = req.body.guns_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// VIEWS
// Handle a show all view
exports.guns_view_all_Page = async function(req, res) {
    try{
    theguns = await guns.find();
    res.render('guns', { title: 'guns Search Results', results: theguns });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    exports.guns_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await guns.findById( req.query.id)
        res.render('gunsdetail',
        { title: 'guns Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
        // Handle building the view for creating a guns.
// No body, no in path parameter, no query.
// Does not need to be async
exports.guns_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('gunscreate', { title: 'Guns Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };