// init weather object
const weather = new Weather('Boston', 'MA');

weather.getWeather()
    .then (result => {
        console.log(result);
    })
    .catch(err => console.log(err))