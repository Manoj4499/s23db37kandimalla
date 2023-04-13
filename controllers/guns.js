var guns = require('../models/guns');
// List of all Costumes
exports.guns_list = async function(req, res) {
    try{
    guns = await guns.find();
    res.send(guns);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific guns.
exports.guns_detail = function(req, res) {
res.send('NOT IMPLEMENTED: guns detail: ' + req.params.id);
};
// Handle guns create on POST.
exports.guns_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: guns create POST');
};
// Handle guns delete form on DELETE.
exports.guns_delete = function(req, res) {
res.send('NOT IMPLEMENTED: guns delete DELETE ' + req.params.id);
};
// Handle guns update form on PUT.
exports.guns_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: guns update PUT' + req.params.id);
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