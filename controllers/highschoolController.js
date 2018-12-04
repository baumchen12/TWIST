var HighSchool = require('../models/highschool');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all HighSchools
exports.highschool_list = function(req,res,next) {
    HighSchool.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_highschools) {
      if (err) { return next(err); }
      res.render('highschool_list', {title: 'Highschool List', highschool_list: list_highschools});
    });
};

// Display detail page of all HighSchools
exports.highschool_detail = function(req,res) {
    res.send('NOT IMPLEMENTED: School Detail')
};

// Display HighSchool create form on GET.
exports.highschool_create_get = function(req,res,next) {
    res.render('highschool_form', { title: 'Create Highschool' })
};

// Handle HighSchool create on POST
exports.highschool_create_post = [

    // Validate fields.
    body('name', 'Name is required').isLength({ min:1 }).trim(),

    // Sanitize fields.
    sanitizeBody('name').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('highschool_form', { title: 'Create Highschool', highschool: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create a Highschool object with escaped and trimmed data.
            var highschool = new HighSchool(
                {
                    name: req.body.name
                });
            highschool.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new highschool record.
                res.redirect(highschool.url);
            });
        }
    }
];

// Display HighSchool delete form on GET
exports.highschool_delete_get = function(req,res) {
    res.send('NOT IMPLEMENTED: School delete GET')
};

// Handle HighSchool delete on POST
exports.highschool_delete_post = function(req,res) {
    res.send('NOT IMPLEMENTED: School delete POST')
};

//Display HighSchool update form on GET
exports.highschool_update_get = function(req,res) {
    res.send('NOT IMPLEMENTED: School update GET')
};

// Handle HighSchool delete on POST
exports.highschool_update_post = function(req,res) {
    res.send('NOT IMPLEMENTED: School update POST')
};