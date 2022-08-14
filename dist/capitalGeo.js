let data = require('../data/data.json')

const capitalGeo = () => {
    
    let latlng = data.map( item => {
        return {
            country: item.name,
            capital: item.capital,
            lattitude: item.capital_geo.lat,
            longitude: item.capital_geo.lng
        }
    })
    return latlng
}

module.exports = capitalGeo