const lat = 27.7172;  
const lon = 85.3240; 

// •	Latitude: 29.9511
// •	Longitude: -90.0715

// •	Latitude: 5.5540
// •	Longitude: 95.3167

// •	Latitude: 27.7172
// •	Longitude: 85.3240

// •	Latitude: 39.7596
// •	Longitude: -121.6219

const apiKey = "a1d5b523a69f427d4cefd2b299e01697";  // Replace with your OpenWeatherMap API key

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const city = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDeg = data.wind.deg;
    const pressure = data.main.pressure;
    const condition = data.weather[0].description;
    const icon = data.weather[0].icon;
    const cloudiness = data.clouds.all;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    const rain1h = data.rain && data.rain['1h'] ? `${data.rain['1h']} mm` : 'No rain in last 1h';

    document.getElementById('weather').innerHTML = `
      <h2>Current Weather</h2>
      <p><strong>Location:</strong> ${city}, ${country}</p>
      <p><strong>Temperature:</strong> ${temp} °C</p>
      <p><strong>Condition:</strong> ${condition} <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon"></p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Pressure:</strong> ${pressure} hPa</p>
      <p><strong>Wind:</strong> ${windSpeed} m/s at ${windDeg}°</p>
      <p><strong>Cloudiness:</strong> ${cloudiness}%</p>
      <p><strong>Rain (last 1h):</strong> ${rain1h}</p>
      <p><strong>Sunrise:</strong> ${sunrise}</p>
      <p><strong>Sunset:</strong> ${sunset}</p>
    `;
  })
  .catch(error => {
    document.getElementById('weather').innerHTML = `<p>Error fetching weather data.</p>`;
    console.error('Weather API error:', error);
  });