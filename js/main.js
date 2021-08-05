let defaultCity = "Tewksbury";

function getCityWeather(city){
    var ajax = new XMLHttpRequest();
    ajax.onload = functionName;
    ajax.onerror = errorFunctionName;
    ajax.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e26c4c0e6e44adb84fd29c67cfc558f&units=imperial`, true);
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
            var iconCode = json.weather[0].icon;
            var weatherID = json.weather[0].id;
    
            console.log(currentTemp);
            console.log(forecastHi);
            console.log(forecastLo);
            console.log(currentCondition);
            console.log(cityName);
            console.log("Icon code: " + iconCode);
            console.log("Weather ID: " + weatherID);
    

            // The weather ID returns a 3 digit number signifying the type of weather
            // Each type of weather is grouped into something like 100, 200, 300, etc.. seen here: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
            // Based on the grouping, we decide what image to show. If there is weather ocurring that we don't specify, we show an unknown image
            // This part could have definitely been coded better/differently, but i found it hilarious
            var weatherImageSource;

            if (weatherID >= 200 && weatherID < 600) // thunderstorm, drizzle, and rain
            { 
                weatherImageSource = "img/mike_rain.jpg"; 
            }  
            else if ((weatherID >= 700 && weatherID < 800) || (weatherID >= 801 && weatherID < 900)) //atmoshphere and clouds
            { 
                weatherImageSource = "img/mike_cloudy.jpg";
            } 
            else if (weatherID == 800) //clear
            { 
                weatherImageSource = "img/mike_sunny.jpg"; 
            } 
            else //everything else we never accounted for
            { 
                weatherImageSource = "img/mike_unknown.jpg"; 
            } 

            document.getElementById("weatherImage").innerHTML = `<img src=${weatherImageSource}>`;


            document.getElementById("weatherIcon").innerHTML = `<img src=http://openweathermap.org/img/wn/${iconCode}.png>`;
            document.getElementById("cityname").innerHTML = cityName;
            document.getElementById("weather").innerHTML = "Currently " + currentCondition;
            document.getElementById("hi").innerHTML = "High: " + forecastHi + "&deg;";
            document.getElementById("current").innerHTML = "Current Temp: " + currentTemp + "&deg;";
            document.getElementById("lo").innerHTML = "Low: " + forecastLo + "&deg;";
        } else {
            // handle more HTTP response codes here;
        }
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

// This will get called when the script is loaded just so we have some data shown instead of blank stuff
getCityWeather(defaultCity);