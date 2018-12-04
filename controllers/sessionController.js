var Session = require('../models/session');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all Sessions
exports.session_list = function(req,res,next) {
    Session.find()
    .sort([['time', 'ascending']])
    .exec(function (err, list_sessions) {
      if (err) { return next(err); }
      res.render('session_list', {title: 'Session List', session_list: list_sessions});
    });
};

// Display detail page of all Sessions
exports.session_detail = function(req,res) {
    res.send('NOT IMPLEMENTED: Session Detail')
};

// Display Session create form on GET.
exports.session_create_get = function(req,res,next) {
    res.render('session_form', { title: 'Create Session'})
};

// Handle Session create on POST
exports.session_create_post = [

    // Validate fields.
    body('startTime', 'Start time is required').isLength({ min:1 }).trim(),
    body('endTime', 'End time is required').isLength({ min:1 }).trim(),

    // Sanitize fields.
    sanitizeBody('startTime').trim().escape(),
    sanitizeBody('endTime').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('session_form', { title: 'Create Session', session: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create a Session object with escaped and trimmed data.
            var session = new Session(
                {
                    startTime: req.body.startTime,
                    endTime: req.body.endTime
                });
            session.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new session record.
                res.redirect(session.url);
            });
        }
    }
];

// Display Session delete form on GET
exports.session_delete_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Session delete GET')
};

// Handle Session delete on POST
exports.session_delete_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Session delete POST')
};

//Display Session update form on GET
exports.session_update_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Session update GET')
};

// Handle Session delete on POST
exports.session_update_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Session update POST')
};