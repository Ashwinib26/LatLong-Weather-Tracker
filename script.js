const lat = 39.7596;  // Example: New Delhi latitude
const lon = -121.6219;  // Example: New Delhi longitude

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
    const location = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;

    document.getElementById("location").innerText = `Location: ${location}`;
    document.getElementById("temperature").innerText = `Temperature: ${temp} °C`;
    document.getElementById("description").innerText = `Condition: ${desc}`;
  })
  .catch(error => {
    console.error("Error fetching weather:", error);
    document.getElementById("weather").innerText = "Failed to load weather data.";
  });
