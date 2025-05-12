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

const apiKey = "a1d5b523a69f427d4cefd2b299e01697";  // Store in .env if using build tools

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `${data.main.temp} °C`;
    document.getElementById('condition').innerHTML = `${data.weather[0].description} <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon">`;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
    document.getElementById('wind').innerText = `${data.wind.speed} m/s at ${data.wind.deg}°`;
    document.getElementById('cloudiness').innerText = `${data.clouds.all}%`;
    document.getElementById('rain').innerText = data.rain && data.rain['1h'] ? `${data.rain['1h']} mm` : 'No rain in last 1h';
    document.getElementById('sunrise').innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    document.getElementById('sunset').innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  })
  .catch(error => {
    console.error('Weather API error:', error);
    const elements = [
      'location', 'temperature', 'condition', 'humidity',
      'pressure', 'wind', 'cloudiness', 'rain', 'sunrise', 'sunset'
    ];
    elements.forEach(id => {
      document.getElementById(id).innerText = "Error loading data";
    });
  });
