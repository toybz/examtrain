var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var TutorialSchema = new mongoose.Schema({
     subject_name: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
        logo_path: String,
        topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }]

}, {timestamps: true});

TutorialSchema.plugin(uniqueValidator, {message: 'is already taken'});


mongoose.model('Tutorial', TutorialSchema);
