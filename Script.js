let weather = {
  apiKey: "02fe6329813d39a189f435fb7fec37a2",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    //   .then (data => console.log(data));
  },
  displayWeather: function (data) {
    // fetch the name of the city
    const { name } = data;
    // fetch the icon and description of weather
    const { icon, description } = data.weather[0];
    // fetch the temperature and humidity of the weather condition
    const { temp, humidity } = data.main;
    // fetch the wind speed
    const { speed } = data.wind;
    console.log("------>>>", name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed : " + speed + " km/hr";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Cairo")

// .charAt(0).toUpperCase() + description.slice(1)
