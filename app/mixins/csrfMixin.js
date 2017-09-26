// 
exports.default = {
    data: function () {
        return {
            _csrf: ''
        };
    },
    methods: {
        getCsrf: function () {
            let name = 'token=',
                decodedCookie = decodeURIComponent(document.cookie),
                ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        },
    },
    mounted: function () {
        this._data ? this._data._csrf = this.getCsrf() : null;
    },
};