var HighSchool = require('../models/highschool');

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
exports.highschool_create_get = function(req,res) {
    res.send('NOT IMPLEMENTED: School create GET')
};

// Handle HighSchool create on POST
exports.highschool_create_post = function(req,res) {
    res.send('NOT IMPLEMENTED: School Create POST')
};

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