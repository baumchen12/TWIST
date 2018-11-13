var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SessionSchema = new Schema (
{
    //sessionNum: {type: Number, required: true},
	Time: {type: Date, required: true},
}
);

// Virtual for session URL
SessionSchema
.virtual('url')
.get(function () {
	return '/index/session/' + this._id;
});

// Export model
module.exports = mongoose.model('Session', SessionSchema);