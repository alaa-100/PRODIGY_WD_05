document.getElementById("locationInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let location = event.target.value;
        const apiKey = '895284fb2d2c50a520ea537456963d9c';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById("locationName").textContent = data.name;
                    document.getElementById("temperature").textContent = `${data.main.temp.toFixed()}°F`;
                    document.getElementById("weatherDescription").textContent = data.weather[0].main;
                    document.getElementById("feelsLike").textContent = `${data.main.feels_like.toFixed()}°F`;
                    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
                    document.getElementById("windSpeed").textContent = `${data.wind.speed.toFixed()} MPH`;
                } else {
                    alert("Location not found. Please try again.");
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert("Error fetching weather data. Please try again.");
            });
        
        event.target.value = ''; // Clear the input field
    }
});
