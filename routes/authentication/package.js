/**
 * This is the function where you are going to login. This is only used for post request
 *
 * @param req
 * @param res
 */
exports.login = function (req, res) {

    //if (err) return next(err);
    //if (!doc) return res.send('<p>User not found. Go back and try again</p>');

    //res.render('authentication/login', { title:'Login' });

    var user = {
        "first"   :"Don Bosco",
        "last"    :"van Hoi",
        "email"   :"donbosco.rulz@gmail.com",
        "password":"asdf",
        "_id"     :"4ef2cbd77bb50163a7000001"
    }

    req.session.loggedIn = user;
    req.session.user = user;
    console.log(req.session.user);
    res.redirect('/');
};

/**
 * Log out the user and redirect him to the route '/' in app.js.
 * So we don't need to render the logout page.
 *
 * @param req
 * @param res
 */
exports.logout = function (req, res) {
    req.session.loggedIn = null;
    req.session.user = null;
    res.redirect('/');
};

exports.signup = function (req, res) {
    res.render('authentication/signup', { title:'Signup' });
};