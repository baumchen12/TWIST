var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScheduleSchema = new Schema (
{
	topicCode: {type: String, required: true, max: 100},
	presenterID: {type: String, required: true},
}
);

// Virtual for schedule's URL
ScheduleSchema
.virtual('url')
.get(function () {
	return '/catalog/schedule/' + this._id;
});

// Export model
module.exports = mongoose.model('Schedule', ScheduleSchema);