
// init Storage
const storage = new Storage;
//Get stored locationb Data
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// init UI 
const ui = new UI;



// Get Weather on DOM  LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// Change location EVENT

document.getElementById('w-change').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // change location
    weather.changeLocation(city, state);
    console.log(city, state);
    //set location in LC
    storage.setLocationData(city, state)
    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide')

})

/// get and display weather on DOM LOAD
function getWeather() {
    weather.getWeather()
        .then (result => {
            ui.paint(result)
        })
        .catch(err => console.log(err));
}