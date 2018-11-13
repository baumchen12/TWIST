var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HighSchoolSchema = new Schema (
{
	name: {type: String, required: true, max: 100},
}
);

// Virtual for high school's full name
HighSchoolSchema
.virtual('name')
.get(function () {
	return this.name;
});

// Virtual for high school's URL
HighSchoolSchema
.virtual('url')
.get(function () {
	return '/catalog/highschool/' + this._id;
});

// Export model
module.exports = mongoose.model('High School', HighSchoolSchema);