let data = require('../data/data.json')

const countryCapitalList = () => {
    let capitals = []
    data.map( item => {
        let obj = {
            country: item.name,
            capital: item.capital
        }
        capitals.push(obj)
        return true
    })
    return capitals
}

module.exports = countryCapitalList