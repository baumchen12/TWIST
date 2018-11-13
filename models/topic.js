var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicSchema = new Schema (
{
	title: {type: String, required: true, max: 100},
	description: {type: String, required: true, max: 150},
}
);

// Virtual for topic's URL
TopicSchema
.virtual('url')
.get(function () {
	return '/catalog/topic/' + this._id;
});

// Export model
module.exports = mongoose.model('Topic', TopicSchema);