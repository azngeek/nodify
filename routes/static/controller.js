/**
 * Display the about page
 *
 * @param req
 * @param res
 */
exports.about = function (req, res) {
    res.render('static/about', {
        title:'About'
    });
};

/**
 * Display the faq page
 *
 * @param req
 * @param res
 */
exports.faq = function (req, res) {
    res.render('static/faq', {
        title:'Faq'
    });
};

/**
 * Display the team page
 *
 * @param req
 * @param res
 */
exports.team = function (req, res) {
    res.render('static/team', {
        title:'Team'
    });
};