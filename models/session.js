var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SessionSchema = new Schema (
{
	Time: {type: Date, required: true},
}
);

// Virtual for session URL
SessionSchema
.virtual('url')
.get(function () {
	return '/catalog/session/' + this._id;
});

// Export model
module.exports = mongoose.model('Session', SessionSchema);