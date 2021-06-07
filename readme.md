# All Country Data
### Installation
```sh
npm i all-country-data
```

### Usage
```js
import country from 'all-country-data'

console.log( country.all())
console.log( country.findByCountryCode('+91'))
```
```js
var country = require('all-country-data');

console.log( country.all())
console.log( country.findByCountryCode('+91'))
```

### Use Only Required Function
```js
import search from 'all-country-data/dist/search'
or
var search = require('all-country-data/dist/search')

console.log(search("India"))
```
```js
import countryCapitalList from 'all-country-data/dist/countryCapitalList'
or
var countryCapitalList = require('all-country-data/dist/countryCapitalList')

console.log( countryCapitalList() )
```
##### `You can import any particular function by the above method.`
#
---
---

# Functions
| Function Name | Returns | Arguments | Description |
| ------------- | ------- | --------- | ----------- |
| all() | Array of Objects | null | Returns all countries data including "country", "country_code", "isd_code", "languages", "capital", "currency", "currency_code". |
| count() | No. of countries {Integer} | null | Returns total number of countries in the world. |
| countryCapitalList() | Array of Objects | null | Returns capitals of all the countries. |
| countryCurrencyList() | Array of Objects | null | Returns every country name with currency name and currency code. |
| countryIsdCodeList() | Array of Objects | null | Returns ISD Code of all the countries. |
| countryLanguageList() | Array of Objects | null | Returns all country names with their languages. returns {"country": `Type` String, "languages": `Type` Array} |
| countryList() | Array of Objects | null | Returns Country names with their Codes. {"country": `Type` String, "country_code": `Type` String } |
| findByCountryCode() | Single Object | `String` | Returns empty object if country code not found or Returns an objects after finding. |
| findByCountryISD() | Single Object | `String` | Returns empty object if country ISD not found or Returns an objects after finding. |
| findByCountryName() | Single Object | `String` | Returns empty object if country name not found or returns an object after finding |
| findCountryByCapital() | Single Object | `String` | Returns empty object if country capital not found or returns an object after finding |
| search() | Array of Objects | `String` | Returns "country", "country_code", "isd_code", "languages", "capital", "currency", "currency_code". It will search in Country Name, Country Code, ISD Code, Capital, Currency, Currency Code. This will not search for Languages. Try `searchByLanguage()` function to search data by language |
| searchByLanguage() | Array of Objects | `String` | Returns "country", "country_code", "isd_code", "languages", "capital", "currency", "currency_code". It only serach in languages. Try `search()` function to search data by country name, code, isd, capital, etc... |

## Examples
```js
import countries from 'all-country-data'

var allCountries = countries.all()
allCountries.map( item => {
    console.log(item.country)
    console.log(item.country_code)
})

var totalCountries = countries.count()
console.log( totalCountries )

var capitals = countries.countryCapitalList()
capitals.map( item => {
    console.log(item.country)
    console.log(item.capital)
})

var currency = countries.countryCurrencyList()
allCountries.map( item => {
    console.log(item.country)
    console.log(item.currency_code) 
})

```
##### `Remaining function can also be used like the above explained functions.`
#
#
#### GitHub Repository
[Git Repository](https://github.com/shanuraj715/all-country-data)
#### NPM Package
[NPM Package Repository](https://www.npmjs.com/package/all-country-data)

## License

MIT

**Free Package, by shanuraj715!**