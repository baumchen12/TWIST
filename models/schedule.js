var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScheduleSchema = new Schema (
{
    sessionNum: {type: Schema.Types.ObjectId, ref: 'Session', required: true},
    roomNum: {type: Schema.Types.ObjectId, ref: 'Room', required: true},
	topicCode: {type: Schema.Types.ObjectId, ref: 'Topic', required: true},
	presenterID: {type: Schema.Types.ObjectId, ref: 'Presenter', required: true},
}
);

// Virtual for schedule's URL
ScheduleSchema
.virtual('url')
.get(function () {
	return '/index/schedule/' + this._id;
});

// Export model
module.exports = mongoose.model('Schedule', ScheduleSchema);