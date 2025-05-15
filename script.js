// •	Latitude: 29.9511
// •	Longitude: -90.0715

// •	Latitude: 5.5540
// •	Longitude: 95.3167

// •	Latitude: 27.7172
// •	Longitude: 85.3240

// •	Latitude: 39.7596
// •	Longitude: -121.6219

const apiKey = "a1d5b523a69f427d4cefd2b299e01697";

function getWeather() {
  const lat = document.getElementById("latitude").value;
  const lon = document.getElementById("longitude").value;
  const btn = document.getElementById("weather-btn");

  if (!lat || !lon) {
    alert("Please enter both latitude and longitude!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('weather-data').style.display = 'grid';

      document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').innerText = `${data.main.temp} °C`;
      document.getElementById('condition').innerHTML = `${data.weather[0].description} <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="icon">`;
      document.getElementById('humidity').innerText = `${data.main.humidity}%`;
      document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
      document.getElementById('wind').innerText = `${data.wind.speed} m/s at ${data.wind.deg}°`;
      document.getElementById('cloudiness').innerText = `${data.clouds.all}%`;
      document.getElementById('rain').innerText = data.rain && data.rain['1h'] ? `${data.rain['1h']} mm` : 'No rain in last 1h';
      document.getElementById('sunrise').innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      document.getElementById('sunset').innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();

      btn.textContent = "Reset";
      btn.onclick = resetApp;
    })
    .catch(error => {
      console.error('Weather API error:', error);
      alert("Failed to fetch weather data. Please check coordinates.");
    });
}

function resetApp() {
  document.getElementById("latitude").value = '';
  document.getElementById("longitude").value = '';
  document.getElementById("weather-data").style.display = 'none';

  const btn = document.getElementById("weather-btn");
  btn.textContent = "Get Weather";
  btn.onclick = getWeather;
}