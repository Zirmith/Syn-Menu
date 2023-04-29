// Replace {API_KEY} with your OpenWeatherMap API key
const API_KEY = "f4053b0d722edb2cdaf8b12aad62d2bd";
const weather = document.getElementById('weather')
// Get the user's device location information
navigator.geolocation.getCurrentPosition(function(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Fetch the current weather data for the user's location
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      // Extract the current temperature data from the API response
      console.log(data)
      const temp = data.main.temp

      // Display the temperature data to the user
      const tempF = Math.round((temp - 273.15) * 9/5 + 32);
      console.log(`The current temperature is ${tempF}°F`);
      weather.innerHTML = `<strong> ${tempF}° </strong>`
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      weather.innerHTML = `<strong> ${error}° </strong>`
    });
});




$('#mod-menu-btn').click(function() {
	var modMenuBtn = $('#mod-menu-btn');
	var modMenuPos = modMenuBtn.offset();
	var modMenu = $('#mod-menu'),
		curHeight = modMenu.height(),
		autoHeight = modMenu.css('height', 'auto').height();
	
	modMenu.css('position', 'absolute');
	modMenu.toggle();
	modMenu.offset({ top: modMenuPos.top + 50, left: modMenuPos.left });
	if (modMenu.css('display') == 'block') {
		modMenu.addClass('realistic-shadow');
		modMenuBtn.addClass('header-item-pressed');
	} else {
		modMenu.removeClass('realistic-shadow');
		modMenuBtn.removeClass('header-item-pressed');
	}
});
