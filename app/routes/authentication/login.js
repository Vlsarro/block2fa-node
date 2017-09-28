const passport = require('passport');

module.exports.default = (router) => {
    router.get('/login', (req, res) => {
        const data = {
            title: 'Hello World',
            message: 'login',
            csrfToken: req.csrfToken()
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
        failureRedirect: '/login'
    }));
};