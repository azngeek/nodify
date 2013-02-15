/**
 * Static page
 * @param req
 * @param res
 */
exports.about = function (req, res) {
    res.render('static/about', { title:'About' });
};

exports.faq = function (req, res) {
    res.render('static/faq', { title:'Faq' });
};