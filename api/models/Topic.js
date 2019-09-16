var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


var TopicSchema = new mongoose.Schema({
    topic_name : {type: String,  unique: true, required: [true, "can't be blank"], index: true},
    logo_path: String,
    description: String,
    show_in_app: {type: Boolean, default: true} ,
    deleted: {type: Boolean, default: false} ,
    sub_topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'SubTopic'}] ,
    subject: {type: mongoose.Schema.Types.ObjectId, ref: 'Subject'}

}, {timestamps: true});




TopicSchema.plugin(uniqueValidator, {message: 'is already taken'});


mongoose.model('Topic', TopicSchema);
