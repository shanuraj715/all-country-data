const zlib = require('zlib')
const fj = require('../data/flags/flags.json')


function decompressString(compressedString) {
    const compressedBuffer = Buffer.from(compressedString, 'base64');
    const decompressedBuffer = zlib.inflateSync(compressedBuffer);
    return decompressedBuffer.toString();
}

const flag = (function () {
    let flags_count = fj.length
    return {
        get: function (country) {
            if (!country || country === '') return ""
            country = country.toLowerCase()
            let str = ''
            for (let i = 0; i < flags_count; i++) {
                if ((fj[i].name).toLowerCase() === country || (fj[i].country_code).toLowerCase() === country) {
                    str = decompressString(fj[i].flag)
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
                    arr.push({
                        ...obj,
                        flag: decompressString(obj.flag)
                    })
                }
            })
            return arr
        }
    }
})();
module.exports = flag