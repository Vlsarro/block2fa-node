module.exports.default = (router) => {
    router.get('/logout', (req, res) => {
        res.redirect('/');
    });
};