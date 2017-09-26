// 

module.exports.default = (router) => {
    router.get('/', (req, res) => {
        const data = {
            title: 'BLOCK2FA-NODE'
        };
        const vueOptions = {
            head: {
                title: 'BLOCK2FA-NODE'
            }
        };
        res.renderVue('main/home', data, vueOptions);
    });
};