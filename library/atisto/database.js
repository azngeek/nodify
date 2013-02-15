mongo = require('mongodb');


module.exports = function Database(configuration) {
    // Setup Routine for mongo
    var Server = mongo.Server,
        Db = mongo.Db,
        BSON = mongo.BSONPure;

    var server = new Server('ds043467.mongolab.com', 43467, {auto_reconnect: true});
    db = new Db('atiso', server);

    db.open(function(err, db) {
        db.authenticate('atisto', 'atisto', function (err, result) {

        })
        if(!err) {
            console.log("Connected to 'test' database");
            db.collection('users', {safe:true}, function(err, collection) {
                if (err) {
                    console.log("The 'user' collection doesn't exist. Creating it with sample data...");
                    populateDB();
                } else {
                    console.log('Kein Fehler');
                }
            });
        } else {
            console.log(err);
        }
    });
    return db;
}