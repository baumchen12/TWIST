var Room = require('../models/room');

// Display list of all Rooms
exports.room_list = function(req,res,next) {
    Room.find()
    .sort([['roomNumber', 'ascending']])
    .exec(function (err, list_rooms) {
      if (err) { return next(err); }
      res.render('room_list', {title: 'Room List', room_list: list_rooms});
    });
};

// Display detail page of all Rooms
exports.room_detail = function(req,res) {
    res.send('NOT IMPLEMENTED: Room Detail')
};

// Display Room create form on GET.
exports.room_create_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Room create GET')
};

// Handle Room create on POST
exports.room_create_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Room Create POST')
};

// Display Room delete form on GET
exports.room_delete_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Room delete GET')
};

// Handle Room delete on POST
exports.room_delete_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Room delete POST')
};

//Display Room update form on GET
exports.room_update_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Room update GET')
};

// Handle Room delete on POST
exports.room_update_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Room update POST')
};