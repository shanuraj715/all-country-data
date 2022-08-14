let data = require('../data/data.json')

const findByCountryName = (name) => {
    if( name === undefined ){
        return {}
    }
    else{
        name = name.toLowerCase()
        let d = {}
        let found = false
        let i = 0
        let numberOfCountries = data.length
        while( found !== true && i < numberOfCountries ){
            if( (data[i].name).toLowerCase() === name ){
                found = true
                let obj = {
                    lattitude: data[i].capital_geo.lat,
                    longitude: data[i].capital_geo.lng
                }
                d.country= data[i].name,
                d.capital= data[i].capital,
                d.languages= data[i].language,
                d.isd_code= data[i].isd,
                d.currency= data[i].currency,
                d.currency_code= data[i].currency_code,
                d.country_code= data[i].country_code,
                d.capital_geo= obj
            }
            i++
        }
        return d
    }
}

module.exports = findByCountryName