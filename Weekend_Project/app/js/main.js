const getWeather = async (city) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e26c4c0e6e44adb84fd29c67cfc558f`);
        return response.data;
}

const showWeather = async (city) => {
    let data = await getWeather(city)
    data = data

    let currentTemp = data.main.temp;
    let forecastHi = data.main.temp_max;
    let forecastLo = data.main.temp_min;
    let currentCondition = data.weather[0].main;
    let cityName = data.name;
    console.log(currentTemp)
    console.log(forecastHi)
    console.log(forecastLo)
    console.log(currentCondition)
    console.log(cityName)
}



const form = document.querySelector('#floatingInput');
console.log(form)

form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    clear_data()
    let city = event.path[0][0].value
    showWeather(city)
})

let DOM_Elements = {
    weather_list : `.weather-list`
}

const create_html = (city) => {
    const html_tag = `<a href="#" class="list-group-item list-group-item-action list-group-item-light"${currentTemp} | ${forecastHi} | ${forecastLo} | ${currentCondition} | ${cityName}</a>`
    document.querySelector(DOM_Elements.weather_list).insertAdjacentHTML('beforeend', html_tag);
}


const clear_data = () => {
    document.querySelector(DOM_Elements.weather_list).innerHTML = '';
}
