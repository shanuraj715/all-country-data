let data = require('../data/data.json')

const capitalGeo = () => {
    let latlng = []
    data.map( item => {
        let obj = {
            country: item.name,
            capital: item.capital,
            lattitude: item.capital_geo.lat,
            longitude: item.capital_geo.lng
        }
        latlng.push(obj)
        return true
    })
    return latlng
}

module.exports = capitalGeo