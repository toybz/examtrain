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