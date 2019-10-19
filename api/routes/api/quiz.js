var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../auth');


router.post('/history', auth.required, function(req, res, next) {


    var quiz = req.body.quiz;

    User.findById(req.payload.id).then(function(user){
        if (!user) { return res.sendStatus(401); }

        return user.addToQuizHistory(quiz).then(function(){

     return res.json (user.toQuizHistoryJson());
        });
    }).catch(next);


});

router.get('/history', auth.required, function(req, res, next) {

    //add pagination

    User.findById(req.payload.id).then(function(user){
        if (!user) { return res.sendStatus(401); }

      return res.json (user.toQuizHistoryJson());

    }).catch(next);

});




module.exports = router;