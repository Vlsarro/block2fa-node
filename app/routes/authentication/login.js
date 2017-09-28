const passport = require('passport');

module.exports.default = (router) => {
    router.get('/login', (req, res) => {
        const data = {
            title: 'Login',
            message: 'login',
            csrfToken: req.csrfToken(),
            currentTab: req.originalUrl
        };
        const vueOptions = {
            head: {
                title: 'Login'
            }
        };
        res.renderVue('authentication/login', data, vueOptions);
    });

    router.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));
};