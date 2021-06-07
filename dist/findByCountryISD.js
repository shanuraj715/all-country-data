let data = require('../data/data.json')

const findByCountryISD = (isd) => {
    if( isd === undefined ){
        return {}
    }
    else{
        let d = {}
        let found = false
        let i = 0
        let numberOfCountries = data.length
        while( found !== true && i < numberOfCountries ){

            let ar = data[i].isd
            ar.map( item => {
                if( item === isd ){
                    found = true
                    d.country= data[i].name,
                    d.capital= data[i].capital,
                    d.languages= data[i].language,
                    d.isd_code= data[i].isd,
                    d.currency= data[i].currency,
                    d.currency_code= data[i].currency_code,
                    d.country_code= data[i].country_code
                }
            })
            i++
        }
        return d
    }
}

module.exports = findByCountryISD