let weather = {
    apiKey: "a0b6beb16523d9d5eded6b96e4aaa3c5",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector("#name").innerText = "Weather in " + name;
      document.querySelector("#icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector("#description").innerText = description;
      document.querySelector("#temperature").innerText = temp + "°C";
      document.querySelector("#humid").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector("#wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector("#search").value);
    },
  };
  
//   document.querySelector("button").addEventListener("click", function () {
//     weather.search();
//   });
  
//   document
//     .querySelector("#search")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         weather.search();
//       }
//     });
  
//   weather.fetchWeather("Denver");