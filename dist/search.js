let data = require('../data/data.json')

const search = (string) => {
    if( string !== undefined ){
        let ar = []
        data.map( item => {
            if( ( item.name && (item.name).toLowerCase()).includes(string.toLowerCase()) ){
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
            else if( item.capital && ((item.capital).toLowerCase()).includes(string.toLowerCase()) ){
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
            else if( item.isd ){
                (item.isd).map( a => {
                    if( a === string ){
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
                })
            }
            else if( item.currency && ((item.currency).toLowerCase()).includes(string.toLowerCase()) ){
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
            else if( item.currency_code && ((item.currency_code).toLowerCase()).includes(string.toLowerCase()) ){
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
        return ar
    }
    else{
        return []
    }
}

module.exports = search