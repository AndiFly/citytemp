document.querySelector('button').addEventListener('click', fetchWeather)
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
async function fetchWeather() {
    let city = document.querySelector('input').value
    city = capitalizeFirstLetter(city)
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a8ab11c6ff0d432e96384334230407&q=${city}&aqi=no`);
    const data = await response.json();
    document.querySelector('h3').textContent = `The temperature in ${city} is ${data.current.temp_c}°C`
    console.log(data.location.name);
  }

fetchWeather()

