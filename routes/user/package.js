mongo = require('mongodb');
var BSON = mongo.BSONPure;

exports.getUser = function (req, res) {

    console.log('Fetching user: ');
    db.collection('users', function(err, collection) {
        // req.params.id
        var obj_id = BSON.ObjectID.createFromHexString("511e4463b95df4564f000001");
        collection.findOne({_id: obj_id},function(err, doc) {
            if (doc){
                console.log(doc._id);
                console.log(doc);
            } else {
                console.log('no data for this company');
            }
        });
    });
}