let data = require('../data/data.json')

const countryIsdCodeList = () => {
    let codes = []
    data.map( item => {
        let obj = {
            country: item.name,
            isd_code: item.isd
        }
        codes.push(obj)
        return true
    })
    return codes
}

module.exports = countryIsdCodeList