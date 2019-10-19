var mongoose = require('mongoose');
var router = require('express').Router();
var Tutorial = mongoose.model('Tutorial');
var Topic = mongoose.model('Topic');
var SubTopic = mongoose.model('SubTopic');


router.get('/', function(req, res, next) {
    var query = {};
    var limit = 20;
    var offset = 0;

    Tutorial.find().then(function (tutorials) {
        return res.json({
                tutorials: tutorials
            }
        );

    });
});

router.post('/', async function(req, res, next) {


   var tutorial = new Tutorial({
       subject_name : 'Test APi 1',
       logo_path : 'ttest/pmg'

   })
 var   document = await   tutorial.save()


    return res.json({
                tutorials: document
            })

});





module.exports = router;
