let data = require('../data/data.json')

const countryCurrencyList = () => {
    let currency = []
    data.map( item => {
        let obj = {
            country: item.name,
            currency: item.currency,
            currency_code: item.currency_code
        }
        currency.push(obj)
        return true
    })
    return currency
}

module.exports = countryCurrencyList