async function getWeather(){
    const apiKey = '410026531249b454698c158c40918321';

    const city = document.getElementById("city").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    try {
        const response = await fetch (apiUrl);
        const data = await response.json();
        if (data.cod === "404"){
            document.getElementById("weatherInfo").innerText = "city not found"
        }else{
            const weatherInfo = `
                  <h3${data.name}, ${data.sys.country}</h3>
                  <p>Temperature: ${data.main.temp} degree celsius </p>
                  <p>Weather: ${data.weather[0].description}</p>
                  <p> Humidity ${data.main.humidity}%</p>
                  <p>Wind Speed: ${data.wind.speed}m/s</p>

            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        }
    }catch (error) {
        console.error ("Error fetching weather data", error);
        document.getElementById("weatherInfo").innerHTML = "An error occured, please try again";
    }

}