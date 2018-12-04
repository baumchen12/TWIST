var Participant = require('../models/participant');
var Schedule = require('../models/schedule');
var async = require('async');

//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');

// Display list of all Participant
exports.participant_list = function(req,res,next) {
    Participant.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, list_participants) {
      if (err) { return next(err); }
      res. render('participant_list', {title: 'Participant List', participant_list: list_participants});
    });
};

// Display detail page of all Participants
exports.participant_detail = function(req,res, next) {
    /*async.parallel({
      participant: function(callback) {
        Participant.findById(req.params.id)
          .exec(callback);
      },
      
      participant_schedules: function(callback) {
        Schedule.find({ 'participant': req.params.id })
      },
      
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.participant==null) { // No results.
            var err = new Error('Participant not found');
            err.status = 404;
            return next(err);
        }
        res.render('participant_detail', { title: 'Participant Detail', participant: results.participant, participant_schedules: results.participant_schedules } );
    });*/
  res.send('NOT IMPLEMENTED: Participant create GET')
};

// Display Participant create form on GET.
exports.participant_create_get = function(req,res) {
    //res.render('participant_form', { title: 'Create Participant' });
    res.send('NOT IMPLEMENTED: Participant Create POST')
};

// Handle Participant create on POST
exports.participant_create_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Participant Create POST')
};

// Display Participant delete form on GET
exports.participant_delete_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Participant delete GET')
};

// Handle Participant delete on POST
exports.participant_delete_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Participant delete POST')
};

//Display Participant update form on GET
exports.participant_update_get = function(req,res) {
    res.send('NOT IMPLEMENTED: Participant update GET')
};

// Handle Participant delete on POST
exports.participant_update_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Participant update POST')
};