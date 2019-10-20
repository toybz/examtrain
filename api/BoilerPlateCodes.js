
serveless_configuration =
{
    "lambda": {
    "role": "ExamTrain-executor",
        "name": "ExamTrain",
        "region": "us-east-1"
},
    "api": {
    "id": "qhn4en82m6",
        "url": "https://qhn4en82m6.execute-api.us-east-1.amazonaws.com/latest"
}
}


/*
To Update a property of  all documents  Collection column
 */
function renameCreatorField() {
    UserDrinks.update({}, { $rename: { "creator" : "user" } }, { multi: true }, function(err, data) {
        if (!err) {
            //success
        }
    })
}
renameCreatorField();
//Find By id
User.findById(req.payload.id).then(function(user) {
}