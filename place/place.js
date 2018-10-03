const axios = require('axios');



const getPlaceLatLngOpt = async(address) => {
    let encondedURL = encodeURI(address);
    const APIKey = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI';

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedURL}&key=${APIKey}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No results for the specified place ${address}`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    console.log('Address', location.formatted_address);
    console.log('Lattitude', coords.lat);
    console.log('Lenght', coords.lng);

    return {
        address: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}


const getPlaceLatLng = (address) => {
    let encondedURL = encodeURI(argv.address);
    const APIKey = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI';
    // console.log()

    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=Cusco Peru&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedURL}&key=${APIKey}`).then(resp => {
        console.log('CAMACAMACAM', resp.data);
        console.log('=====================================');
        console.log(JSON.stringify(resp.data, undefined, 5));
        console.log(resp.status);


        let location = resp.data.results[0];
        console.log('Address', location.formatted_address);
        console.log('Lattitude', location.geometry.location.lat);
        console.log('Lenght', location.geometry.location.lng);



    }).catch(e => console.log("ERROR!!!", e))
}


module.exports = {
    getPlaceLatLngOpt
}