let data = require('../data/data.json')

const countryLanguageList = () => {
    let lang = []
    data.map( item => {
        let obj = {
            country: item.name,
            languages: item.language
        }
        lang.push( obj )
        return true
    })
    return lang
}

module.exports = countryLanguageList