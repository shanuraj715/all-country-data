let countryList = require('./dist/countryList')
let countryCurrencyList = require('./dist/countryCurrencyList')
let countryIsdCodeList = require('./dist/countryIsdCodeList')
let countryCapitalList = require('./dist/countryCapitalList')
let countryLanguageList = require('./dist/countryLanguageList')
let all = require('./dist/all')
let findByCountryName = require('./dist/findByCountryName')
let findByCountryCode = require('./dist/findByCountryCode')
let findByCountryISD = require('./dist/findByCountryISD')
let search = require('./dist/search')
let searchByLanguage = require('./dist/searchByLanguage')
let count = require('./dist/count')
let findCountryByCapital = require('./dist/findCountryByCapital')


const countries = {
    countryList,
    countryCurrencyList,
    countryIsdCodeList,
    countryCapitalList,
    countryLanguageList,
    all,
    findCountryByCapital: cap => findCountryByCapital( cap ),
    findByCountryName: name => findByCountryName(name),
    findByCountryCode: code => findByCountryCode( code ),
    findByCountryISD: isd => findByCountryISD( isd ),
    search: str => search( str ),

    searchByLanguage: str => searchByLanguage( str ),

    count
}
module.exports = countries