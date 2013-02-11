/*
 * GET users listing.
 */

exports.list = function (req, res) {

    var authenticated = false;
    if (req.session.user) {
        authenticated = true;
    }
    console.log(req.session.user);
    res.render('index', { title:'User', user:req.session.user, authenticated: authenticated});
};