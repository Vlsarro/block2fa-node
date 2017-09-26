// 

module.exports.default = (router) => {
    router.get('/', (req, res) => {
        const data = {
            title: 'oContract'
        };
        const vueOptions = {
            head: {
                title: 'oContract'
            }
        };
        res.renderVue('main/home', data, vueOptions);
    });
};