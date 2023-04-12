var guns = require('../models/guns');
// List of all gunss
exports.guns_list = function(req, res) {
res.send('NOT IMPLEMENTED: guns list');
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