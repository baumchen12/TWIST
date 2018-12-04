var Room = require('../models/room');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

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
    res.render('room_form', { title: 'Create Room' });
};

// Handle Room create on POST
exports.room_create_post = [

    // Validate fields.
    body('roomNumber', 'Room Number is required').isLength({ min:1 }).trim(),
    body('building', 'Building is required').isLength({ min:1 }).trim(),
    body('capacity', 'Capacity is required').isLength({ min:1 }).trim(),

    // Sanitize fields.
    sanitizeBody('roomNumber').trim().escape(),
    sanitizeBody('building').trim().escape(),
    sanitizeBody('capacity').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('room_form', { title: 'Create Room', room: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create a Room object with escaped and trimmed data.
            var room = new Room(
                {
                    roomNumber: req.body.roomNumber,
                    building: req.body.building,
                    capacity: req.body.capacity
                });
            room.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new room record.
                res.redirect(room.url);
            });
        }
    }
];

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