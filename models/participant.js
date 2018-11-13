var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ParticipantSchema = new Schema (
{
	lastName: {type: String, required: true, max: 100},
	firstName: {type: String, required: true, max: 100},
	address: {type: String, required: true, max: 100},
	email: {type: String, required: true, max: 100},
	timeStamp: {type: Date default, Date.now},
	participantType: {type: String},
}
);

// Virtual for participant's full name
ParticipantSchema
.virtual('name')
.get(function () {
	return this.lastName + ', ' + this.firstName;
});

// Virtual for participant's URL
ParticipantSchema
.virtual('url')
.get(function () {
	return '/catalog/participant/' + this._id;
});

// Export model
module.exports = mongoose.model('Participant', ParticipantSchema);