var Topic = require('../models/topic');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all Topics
exports.topic_list = function(req,res,next) {
    Topic.find()
    .sort([['title', 'ascending']])
    .exec(function (err, list_topics) {
      if (err) { return next(err); }
      res.render('topic_list', {title: 'Topic List', topic_list: list_topics});
    });
};

// Display detail page of all Topics
exports.topic_detail = function(req,res) {
    res.send('NOT IMPLEMENTED: Topic Detail')
};

// Display Topic create form on GET.
exports.topic_create_get = function(req,res,next) {
    res.render('topic_form', { title: 'Create Topic' })
};

// Handle Topic create on POST
exports.topic_create_post = [

    // Validate fields.
    body('title', 'Title is required').isLength({ min:1 }).trim(),
    body('description', 'Description is required').isLength({ min:1 }).trim(),

    // Sanitize fields.
    sanitizeBody('title').trim().escape(),
    sanitizeBody('description').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('topic_form', { title: 'Create Topic', topic: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create a Topic object with escaped and trimmed data.
            var topic = new Topic(
                {
                    title: req.body.title,
                    description: req.body.description
                });
            topic.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new topic record.
                res.redirect(topic.url);
            });
        }
    }
];

// Display Topic delete form on GET
exports.topic_delete_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Topic delete GET')
};

// Handle Topic delete on POST
exports.topic_delete_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Topic delete POST')
};

//Display Topic update form on GET
exports.topic_update_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Topic update GET')
};

// Handle Topic delete on POST
exports.topic_update_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Topic update POST')
};