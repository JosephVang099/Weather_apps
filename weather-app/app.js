// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const address = process.argv[2]

// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, { latitude, longitude, location }) => {
//         if (error) {
//             return console.log(error)
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }

//             console.log(location)
//             console.log(forecastData)
//         })
//     })
// }


// PRACTICE'
// const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address){
    console.log ('Please provide an address') //Type in "New York", "Boston", "Dublin" and etc.
} else {
    geocode(address, (error, { latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
          })
    })
}

console.log(process.argv)



// const url = 'http://api.weatherstack.com/current?access_key=e842d986ef654ba26e52320004570bc6&query=37.8267,-122.4233&units=f'

// request({url : url, json:true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service') //prints out error when there is no connection
//     } //else if (response.body){
//     //     console.log('Unable to find location') // remove long/lat to work
//     //} 
//     else {
//         // console.log(response.body.current)
//         console.log(response.body.current.weather_descriptions[0] + 'It is currently ' + response.body.current.temperature + ' degrees outside. There is a ' + response.body.current.precip + '% chance of rain.')
//     }

// })





