let data = require('../data/data.json')

const countryCapitalList = () => {
    let capitals = data.map( item => ({
            country: item.name,
            capital: item.capital,
            capital_geo: {
                lattitude: item.capital_geo.lat,
                longitude: item.capital_geo.lng
            }
        })
    )
    return capitals
}

module.exports = countryCapitalList