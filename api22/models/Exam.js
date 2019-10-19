var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ExamSchema = new mongoose.Schema({
    exam_name: {type: String, unique: true, required: [true, "can't be blank"],  index: true },
    logo_path: String,
    show_in_app: {type: Boolean, default: true} ,
    deleted: {type: Boolean, default: false} ,
    subjects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Subject'}],
}, {timestamps: true});

ExamSchema.plugin(uniqueValidator, {message: 'is already taken'});
mongoose.model('Exam', ExamSchema);
