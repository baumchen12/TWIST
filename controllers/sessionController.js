var Session = require('../models/session');

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
exports.session_create_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Session create GET')
};

// Handle Session create on POST
exports.session_create_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Session Create POST')
};

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