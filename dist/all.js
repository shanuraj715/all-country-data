let data = require('../data/data.json')

const all = () => {
    
    let every = data.map( item => {
        return {
            country: item.name,
            capital: item.capital,
            languages: item.language,
            isd_code: item.isd,
            currency: item.currency,
            currency_code: item.currency_code,
            country_code: item.country_code,
            capital_geo: {
                lattitude: item.capital_geo.lat,
                longitude: item.capital_geo.lng
            }
        }

    })
    return every
}

module.exports = all