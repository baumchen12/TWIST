var Presenter = require('../models/presenter');

// Display list of all Presenters
exports.presenter_list = function(req,res,next) {
    Presenter.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, list_presenters) {
      if (err) { return next(err); }
      res.render('presenter_list', {title: 'Presenter List', presenter_list: list_presenters});
    });
};

// Display detail page of all Presenters
exports.presenter_detail = function(req,res) {
    res.send('NOT IMPLEMENTED: Presenter Detail')
};

// Display Presenter create form on GET.
exports.presenter_create_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Presenter create GET')
};

// Handle Presenter create on POST
exports.presenter_create_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Presenter Create POST')
};

// Display Presenter delete form on GET
exports.presenter_delete_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Presenter delete GET')
};

// Handle Presenter delete on POST
exports.presenter_delete_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Presenter delete POST')
};

//Display Presenter update form on GET
exports.presenter_update_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Presenter update GET')
};

// Handle Presenter delete on POST
exports.presenter_update_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Presenter update POST')
};