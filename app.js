
/**
 * Module dependencies.
 */

var express = require('express')

  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , mongodb = require('mongodb')
  , path = require('path')
  , authenticate = require('./library/atisto/authenticate.js')
  , userRoute = require('./routes/user/package.js')
  , authentication = require('./routes/authentication/package.js')
  , backbone = require('./routes/backbone/package.js')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
;


var database = require('./library/atisto/database.js');
var db = new database({});
var BSON = mongo.BSONPure;

// Passport session setup.
// To support persistent login sessions, Passport needs to be able to
// serialize users into and deserialize users out of the session. Typically,
// this will be as simple as storing the user ID when serializing, and finding
// the user by ID when deserializing.
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    authenticate.findById(id, function (err, user) {
        done(err, user);
    });
});

// Use the LocalStrategy within Passport.
// Strategies in passport require a `verify` function, which accept
// credentials (in this case, a username and password), and invoke a callback
// with a user object. In the real world, this would query a database;
// however, in this example we are using a baked-in set of users.
passport.use(new LocalStrategy(
    function(username, password, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // Find the user by username. If there is no user with the given
            // username, or the password is not correct, set the user to `false` to
            // indicate failure and set a flash message. Otherwise, return the
            // authenticated `user`.
            authenticate.findByUsername(username, function(err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
                if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
                return done(null, user);
            })
        });
    }
));

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('tHa4T$MyS3Cr3t'));
  app.use(express.session());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/**
 * Define the routes here
 */
app.get('/', routes.index);

/**
 * user profile
 */
app.get('/user', authenticate.ensureAuthenticated, user.list);
app.get('/user/profile/:name?', user.profile);


/**
 * Authentification routes
 */
app.get('/signup', authentication.signup);
app.get('/login', authenticate.ensureAuthenticatedLogin, authentication.login);
app.get('/logout', authentication.logout)

app.post('/login', passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login' }));

/**
 * Routes for user profiles
 *
 * http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/
 */
app.get    ('/dusers', userRoute.fetchAll);        // retreive all users
app.get    ('/dusers/:id', userRoute.fetch);       // retreive a single user with a specific _id
app.post   ('/dusers', userRoute.add);             // add a single user
app.put    ('/dusers/:id', userRoute.update);      // update a single user with a specific _id
app.delete ('/dusers/:id', userRoute.delete);      // delete a single user with a specific _id

/**
 * testroutes
 */
//app.get(/^\/backbone.*/, authenticate.ensureAuthenticated, backbone.index);
app.get(/^\/backbone.*/, backbone.index);
app.get('/test/:id', function(req, res) {
    var obj = {
        name : 'test'
    };
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write(JSON.stringify(obj));
    res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


