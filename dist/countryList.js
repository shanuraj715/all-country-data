let data = require('../data/data.json')

const countryList = () => {
    let countries = []
    data.map( item => {
        let obj = {
            country: item.name,
            country_code: item.country_code
        }
        countries.push(obj)
        return true
    })
    return countries
}

module.exports = countryList