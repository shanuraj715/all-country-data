let data = require('../data/data.json')

const searchByLanguage = lang => {
    let ar = []
    data.map( item => {
        (item.language).map( lang => {
            if( lang && lang !== '' && lang.toLowerCase() === str.toLowerCase() ){
                let obj = {
                    country: item.name,
                    capital: item.capital,
                    languages: item.language,
                    isd_code: item.isd,
                    currency: item.currency,
                    currency_code: item.currency_code,
                    country_code: item.country_code
                }
                ar.push(obj)
            }
            return true
        })
        return true
    })
    return ar
}

module.exports = searchByLanguage