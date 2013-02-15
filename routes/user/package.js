mongo = require('mongodb');
var BSON = mongo.BSONPure;

/**
 * Retreive all users
 *
 * @param req
 * @param res
 */
exports.fetchAll = function (req, res) {
    console.log('fetch all users');
    db.collection('users', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
            console.log(items);
        });
    });
}

/**
 * Retreive a single user
 *
 * @param req
 * @param res
 */
exports.fetch = function (req, res) {
    console.log('fetch single user with id: ' + req.params.id);
    db.collection('users', function(err, collection) {
        // req.params.id
        var obj_id = BSON.ObjectID.createFromHexString(req.params.id);
        console.log('obj_id : ' + obj_id);
        collection.findOne({_id: obj_id},function(err, doc) {
            if (doc){
                res.send(doc);
                console.log(doc);
            } else {
                console.log('no data for this company');
            }
        });
    });
}

/**
 * Insert example data
 *
 * @param req
 * @param res
 */
exports.add = function (req, res) {
    var user =  {
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice...",
        picture: "saint_cosme.jpg"
    };

    console.log('Adding user: ');
    db.collection('users', function(err, collection) {
        collection.insert(user, {safe:true}, function(err, result) {
            if (err) {
                console.log(err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
};

exports.update = function (req, res) {

}

exports.delete = function(req, res) {

}