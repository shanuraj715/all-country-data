let data = require('../data/data.json')

const search = (string) => {
    if (string !== undefined) {
        let ar = []
        data.map(item => {
            if ((item.name && (item.name).toLowerCase()).includes(string.toLowerCase())) {
                let geo = {
                    lattitude: item.capital_geo.lat,
                    longitude: item.capital_geo.lng
                }
                let obj = {
                    country: item.name,
                    capital: item.capital,
                    languages: item.language,
                    isd_code: item.isd,
                    currency: item.currency,
                    currency_code: item.currency_code,
                    country_code: item.country_code,
                    capital_geo: geo
                    
                }
                ar.push(obj)
            }
            else if (item.capital && ((item.capital).toLowerCase()).includes(string.toLowerCase())) {
                let geo = {
                    lattitude: item.capital_geo.lat,
                    longitude: item.capital_geo.lng
                }
                let obj = {
                    country: item.name,
                    capital: item.capital,
                    languages: item.language,
                    isd_code: item.isd,
                    currency: item.currency,
                    currency_code: item.currency_code,
                    country_code: item.country_code,
                    capital_geo: geo
                }
                ar.push(obj)
            }
            else if (item.isd) {
                (item.isd).forEach(a => {
                    if (a === string) {
                        let geo = {
                            lattitude: item.capital_geo.lat,
                            longitude: item.capital_geo.lng
                        }
                        let obj = {
                            country: item.name,
                            capital: item.capital,
                            languages: item.language,
                            isd_code: item.isd,
                            currency: item.currency,
                            currency_code: item.currency_code,
                            country_code: item.country_code,
                            capital_geo: geo
                        }
                        ar.push(obj)
                    }
                })
            }
            else if (item.currency && ((item.currency).toLowerCase()).includes(string.toLowerCase())) {
                let geo = {
                    lattitude: item.capital_geo.lat,
                    longitude: item.capital_geo.lng
                }
                let obj = {
                    country: item.name,
                    capital: item.capital,
                    languages: item.language,
                    isd_code: item.isd,
                    currency: item.currency,
                    currency_code: item.currency_code,
                    country_code: item.country_code,
                    capital_geo: geo
                }
                ar.push(obj)
            }
            else if (item.currency_code && ((item.currency_code).toLowerCase()).includes(string.toLowerCase())) {
                let geo = {
                    lattitude: item.capital_geo.lat,
                    longitude: item.capital_geo.lng
                }
                let obj = {
                    country: item.name,
                    capital: item.capital,
                    languages: item.language,
                    isd_code: item.isd,
                    currency: item.currency,
                    currency_code: item.currency_code,
                    country_code: item.country_code,
                    capital_geo: geo
                }
                ar.push(obj)
            }
        })
        return ar
    }
    else {
        return []
    }
}

module.exports = search