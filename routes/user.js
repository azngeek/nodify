/*
 * GET users listing.
 */

exports.list = function (req, res) {

    console.log(req.user);
    if (req.user) {
        authenticated = true;
    }
    res.render('index', { title:'User', user:req.user, authenticated: authenticated});
};

exports.profile = function (req, res) {

    console.log(req.user);
    if (req.user) {
        authenticated = true;
    }
    res.render('user/profile', { title:'User', user:req.user});
};