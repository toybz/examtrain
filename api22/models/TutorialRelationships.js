var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//This is neccessary because an exam can have multiple subjects that also belong to other exams, each exam, subject match can then be used still pointing to the reference
var ExamAndSubjectRelationshipSchema = new mongoose.Schema({
    exam_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' } ,
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' } ,
    show_in_app: {type: Boolean, default: true} ,
    deleted: {type: Boolean, default: false} ,
    position_in_list: {type:Number}
}, {timestamps: true});
mongoose.model('ExamAndSubjectRelationship', ExamAndSubjectRelationshipSchema);

//This is neccessary because an exam can have multiple topics that also belong to other exams, each exam-topic match can then be used still pointing to the reference, also some topics can be present for a subject in examA while they wont be present for that same subject in examB
var ExamAndTopicRelationshipSchema = new mongoose.Schema({
    exam_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' } ,
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' } ,
    topic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' } ,
    show_in_app: {type: Boolean, default: true} ,
    deleted: {type: Boolean, default: false} ,
    position_in_list: {type:Number}
}, {timestamps: true});
mongoose.model('ExamAndTopicRelationship', ExamAndTopicRelationshipSchema);


/*This is neccessary because an exam can have multiple subject sub-topic that also belong to other exams, each exam-subtopic match can then be used still pointing to the reference.
also some subtopics can be present for a subject in examA while they wont be present for that same subject in examB*/
var ExamAndSubTopicRelationshipSchema = new mongoose.Schema({
    exam_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' } ,
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' } ,
    topic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' } ,
    sub_topic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'SubTopic' } ,
    show_in_app: {type: Boolean, default: true} ,
    deleted: {type: Boolean, default: false} ,
    position_in_list: {type:Number}
}, {timestamps: true});
mongoose.model('ExamAndSubTopicRelationship', ExamAndSubTopicRelationshipSchema);