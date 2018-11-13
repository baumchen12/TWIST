var Schedule = require('../models/schedule');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Schedules
exports.schedule_list = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule List')
};

// Display detail page of all Schedules
//exports.schedule_detail = function(req,res) {
    //res.send('NOT IMPLEMENTED: Schedule Detail')
//};

// Display Schedule create form on GET.
exports.schedule_create_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule create GET')
};

// Handle Schedule create on POST
exports.schedule_create_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule Create POST')
};

// Display Schedule delete form on GET
exports.schedule_delete_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule delete GET')
};

// Handle Schedule delete on POST
exports.schedule_delete_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule delete POST')
};

//Display Schedule update form on GET
exports.schedule_update_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule update GET')
};

// Handle Schedule delete on POST
exports.schedule_update_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule update POST')
};