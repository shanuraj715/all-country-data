const fj = require('../data/flags/flags.json')

const flag = (function () {
    let flags_count = fj.length
    return {
        get: function (country) {
            if (!country || country === '') return ""
            country = country.toLowerCase()
            let str = ''
            for (let i = 0; i < flags_count; i++) {
                if ((fj[i].name).toLowerCase() === country || (fj[i].country_code).toLowerCase() === country) {
                    str = fj[i].flag
                    break
                }
            }
            return str
        },
        search: function (country) {
            let arr = []
            country = country.toLowerCase()
            fj.forEach(function (obj) {
                let name = (obj.name).toLowerCase()
                let code = (obj.country_code).toLowerCase()
                if (name.includes(country) || code.includes(country)) {
                    arr.push(obj)
                }
            })
            return arr
        }
    }
})();
module.exports = flag