module.exports.default = (router) => {
    router.get('/signup', (req, res) => {
        const data = {
            title: 'Signup',
            csrfToken: req.csrfToken(),
            currentTab: req.originalUrl
        };
        const vueOptions = {
            head: {
                title: 'Signup'
            }
        };
        res.renderVue('authentication/signup', data, vueOptions);
    });

    router.post('/signup', (req, res) => {
        const data = {
            title: 'Signup',
        };
        const vueOptions = {
            head: {
                title: 'Signup'
            }
        };
        res.renderVue('authentication/signup', data, vueOptions);
    });
};