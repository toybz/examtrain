var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var SubTopicSchema = new mongoose.Schema({
    sub_topic_name : {type: String, unique: true, required: [true, "can't be blank"],  index: true},
    logo_path: String,
    description: String,
    url: { type: String, required: [true, "can't be blank"]} ,
    show_in_app: {type: Boolean, default: true},
    deleted: {type: Boolean, default: false} ,
    topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}

    } , {timestamps: true});


SubTopicSchema.plugin(uniqueValidator, {message: 'is already taken'});


mongoose.model('SubTopic', SubTopicSchema);
