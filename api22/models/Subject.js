var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var SubjectSchema = new mongoose.Schema({
    subject_name: {type: String, unique: true, required: [true, "can't be blank"],  index: true },
    logo_path: String,
    description: String,
    show_in_app: {type: Boolean, default: true} ,
    deleted: {type: Boolean, default: false} ,
    topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}],

}, {timestamps: true});
SubjectSchema.plugin(uniqueValidator, {message: 'is already taken'});
mongoose.model('Subject', SubjectSchema);
