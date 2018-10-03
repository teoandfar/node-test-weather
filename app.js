// const axios = require('axios');

const place = require('./place/place');
const weather = require('./weather/weather');


const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Adress of the city',
        demand: true
    }
}).argv;

// console.log(argv.address);

// let encondedURL = encodeURI(argv.address);
// const APIKey = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI';

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=Cusco Peru&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedURL}&key=${APIKey}`).then(resp => {
//     console.log('CAMACAMACAM', resp.data);
//     console.log('=====================================');
//     console.log(JSON.stringify(resp.data, undefined, 5));
//     console.log(resp.status);


//     let location = resp.data.results[0];
//     console.log('Address', location.formatted_address);
//     console.log('Lattitude', location.geometry.location.lat);
//     console.log('Lenght', location.geometry.location.lng);



// }).catch(e => console.log("ERROR!!!", e))

place.getPlaceLatLngOpt(argv.address).then(resp => {
    console.log(resp);
}).catch(e => { console.log(e) });


const getWeatherData = async() => {


    try {
        const coords = await place.getPlaceLatLngOpt(argv.address);
        const weatherData = await weather.getWeather(coords.lat, coords.lng);

        // return weatherData;
        return `The weather in ${coords.address} has a temp of ${weatherData.temp}`
    } catch (e) {
        return `Undefined weather in ${address}`
    }
}

getWeatherData().then(message => { console.log(message); }).catch(e => {
    console.log(e);
})