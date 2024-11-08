require('dotenv').config();
const Weather = require('./models/weather');
const button = document.getElementById("get-data");
button.addEventListener('click', () => {
    let userWeather = new Weather(process.env.METEOSOURCE_API_KEY);
    let response = userWeather.getPlace('Tampico');

    document.getElementById('response').textContent = response;
});