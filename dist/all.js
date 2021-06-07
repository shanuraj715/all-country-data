let data = require('../data/data.json')

const all = () => {
    let every = []
    data.map( item => {
        let obj = {
            country: item.name,
            capital: item.capital,
            languages: item.language,
            isd_code: item.isd,
            currency: item.currency,
            currency_code: item.currency_code,
            country_code: item.country_code
        }
        every.push(obj)
        return true
    })
    return every
}

module.exports = all