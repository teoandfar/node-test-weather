const axios = require('axios');

const getWeather = async(lat, lng) => {

    const APIKey = 'c1cb61d4a45b3a5763a4a429656b4679';

    console.log('ÇOORDS', lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${APIKey}`;
    console.log(url);
    const resp = await axios.get(url);
    // console.log('KARAKA', resp);

    if (resp.data.cod !== 200) {
        throw new Error(`No results for the specified coordinates (${lat},${lng})`);
    }
    return resp.data.main;

}

module.exports = {
    getWeather
}