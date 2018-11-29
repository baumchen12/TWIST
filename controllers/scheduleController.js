var Schedule = require('../models/schedule');
var HighSchool = require('../models/highschool');
var Participant = require('../models/participant');
var Presenter = require('../models/presenter');
var Room = require('../models/room');
var Session = require('../models/session');
var Topic = require('../models/topic');

var async = require('async');

exports.index = function(req, res) {
    async.parallel({
      participant_count: function(callback) {
        Participant.countDocuments({}, callback);
      },
      presenter_count: function(callback) {
        Presenter.countDocuments({}, callback);
      },
      session_count: function(callback) {
        Session.countDocuments({}, callback);
      },
      topic_count: function(callback) {
        Topic.countDocuments({}, callback);
      },
      room_count: function(callback) {
        Room.countDocuments({}, callback);
      },
      highschool_count: function(callback) {
        HighSchool.countDocuments({}, callback);
      },
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

// Display list of all Schedules
exports.schedule_list = function(req,res, next) {
    Schedule.find({}, 'title participant')
    .populate('participant')
    .exec(function (err, list_schedules) {
      if (err) { return next(err); }
      res.render('schedule_list', { title: 'Schedule List', schedule_list: list_schedules });
    });
};

// Display detail page of all Schedules
exports.schedule_detail = function(req,res) {
    res.send('NOT IMPLEMENTED: Schedule Detail')
};

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