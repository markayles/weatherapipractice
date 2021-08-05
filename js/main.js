var ajax = new XMLHttpRequest();
ajax.onload = functionName;
ajax.onerror = errorFunctionName;
ajax.open("GET", "`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e26c4c0e6e44adb84fd29c67cfc558f&units=imperial`", true);
ajax.send();
function functionName(city) {
    console.log(this);
    if (this.status == 200) {
        var json = JSON.parse(this.responseText);
        var currentTemp = json.main.temp;
        var forecastHi = json.main.temp_max;
        var forecastLo = json.main.temp_min;
        var currentCondition = json.weather[0].main;
        var cityName = json.name;

        console.log(currentTemp)
        console.log(forecastHi)
        console.log(forecastLo)
        console.log(currentCondition)
        console.log(cityName)

        
        document.getElementById("cityname").innerHTML = cityName;
        document.getElementById("weather").innerHTML = "Currently " + currentCondition;
        document.getElementById("hi").innerHTML = "High: " + forecastHi + "&deg;";
        document.getElementById("current").innerHTML = "Current Temp: " + currentTemp + "&deg;";
        document.getElementById("lo").innerHTML = "Low: " + forecastLo + "&deg;";
    } else {
        // handle more HTTP response codes here;
    }
}

function errorFunctionName(e) {
    console.log(this);
    console.error(e);

}

const form = document.querySelector('#EditCity');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let city = event.path[0][0].value;
    functionName(city);
});

//const createList = (name, forecast, currentCondition, currentTemp, forecastLo, forecastHi, humidity) => {
//    let bg_img;
//    console.log(forecast);
//    if (forecast == 'Rain'){bg_img = 'rain'}
//    else if (forecast == 'Snow'){bg_img = 'snow'} 
//    else if (forecast == 'Clear'){bg_img = 'clear'}
//    else if (forecast == 'Clouds'){bg_img = 'clouds'} 
//    else {bg_img = 'default-img'};
//}