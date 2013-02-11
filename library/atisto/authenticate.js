/**
 * Authentication middleware. Basic implementation based on
 * http://stackoverflow.com/questions/7990890/how-to-implement-login-auth-in-node-js/8003291#8003291
 *
 * @param req
 * @param res
 * @param next
 */
exports.authenticate = function (req, res, next) {

    if (req.session.loggedIn) {
        console.log('User eingelogt');
        if (!req.session.user) {
            console.log('no');

            res.send('You are not authorized to view this page');
        } else {
            console.log('Wir dürfen die Resource sehen');
            res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            next();
        }
    } else {
        res.send('You are not authorized to view this page')
    }
};


var users = [
    { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
    , { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' }
];

exports.findById = function(id, fn) {
    var idx = id - 1;
    if (users[idx]) {
        fn(null, users[idx]);
    } else {
        fn(new Error('User ' + id + ' does not exist'));
    }
}
exports.findByUsername = function (username, fn) {
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.username === username) {
            return fn(null, user);
        }
    }
    return fn(null, null);
}

// Simple route middleware to ensure user is authenticated.
// Use this route middleware on any resource that needs to be protected. If
// the request is authenticated (typically via a persistent login session),
// the request will proceed. Otherwise, the user will be redirected to the
// login page.
exports.ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}

exports.ensureAuthenticatedLogin = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/')
    }
    next();
}