/**
 * Authentication middleware
 *
 * @param req
 * @param res
 * @param next
 */
var authenticate = function (req, res, next) {

    if (req.session.loggedIn) {
        console.log('User eingelogt');
        if (!req.session.user) {
            console.log('no');

            res.send('You are not authorized to view this page');
        } else {
            console.log('Wir dürfen die Resource sehen');
            next();
        }
    } else {
        res.send('You are not authorized to view this page')
    }
};

module.exports = authenticate;