const weather = {
  apikey: "a0b6beb16523d9d5eded6b96e4aaa3c5",
  fetchweather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayweather(data));
  },
  displayweather: function (data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector("#name").innerText="Weather in " + name;
    document.querySelector("#icon").src=  "https://openweathermap.org/img/wn/"+ icon + ".png";
    document.querySelector("#description").innerText=   description;
    document.querySelector("#temperature").innerText= "Temperature  "+ "   "  + temp +"°C";
    document.querySelector("#humid").innerText= "Humidity "+ "   "+  humidity +"%";
    document.querySelector("#wind").innerText= "Wind Speed "+ "   " + speed + "km/h";
  },
  search: function(){
    this.fetchweather(document.querySelector("#search").value);
  }
  
};

document.querySelector("button").addEventListener("click",function(){
    weather.search();
});
console.log(weather.fetchweather("Navi Mumbai"));



setInterval(function displaytime() {
  let d=new Date();
  let hour= d.getHours();
  let minute= d.getMinutes();
  let sec= d.getSeconds();
  if(sec<10){
    sec = "0"+sec;
  }
  if(minute<10){
    minute = "0"+minute;
  }
  document.getElementById("time").innerText=` ${hour} : ${minute} : ${sec}`;
  document.getElementById("date").innerText=   d.toDateString();
},1000)
displaytime();
