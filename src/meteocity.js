var input = document.querySelector('input');
var body = document.querySelector('body');
var icon = document.querySelector('.icon-weather');
var temperature = document.querySelector('.weather-temp p');
var temperatureSpan = document.querySelector('.weather-temp p span');
var locationCity = document.querySelector('.location');
var error_message = document.querySelector('.error-message');
var grid = document.querySelector('.grid');

var cities = ['paris', 'athens', 'tokyo', 'bogota', 'madrid', 'london', 'sydney', 'new-york', 'seoul', 'singapur'];
for (var i = 0; i < cities.length; i++) {
   let div = document.createElement('div');
   let p = document.createElement('p');
   let img = document.createElement('img');
   let divHover = document.createElement('div');
   p.appendChild(document.createTextNode(cities[i].charAt(0).toUpperCase()+cities[i].slice(1)));
   div.appendChild(p)
   div.appendChild(img)
   div.appendChild(divHover)
   grid.appendChild(div)
   div.classList.add('city')
   divHover.classList.add('weather-overlay')
   img.id = cities[i] + '-background'
   divHover.id = cities[i]
   city_weather(cities[i])
}

var kelvin = 273;
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var city = input.value;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.toLowerCase() + '&appid=125c5200b8f11dd17a867da70395382c&lang=fr')
            .then(function (response) {
            var json = response.json();
            return json;
        })
            .then(function (json) {
            temperature.innerHTML = Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span>";
            locationCity.innerHTML = json.name + ', ' + json.sys.country;
            icon.src = 'assets/icons/black/png/64x64/' + json.weather[0].icon + '.png';
            error_message.innerHTML = '';
            // C° to F°
            var count = 0;
            temperature.addEventListener('click', function () {
                count += 1;
                if (count % 2 !== 0) {
                    temperature.innerHTML = Math.floor((json.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span>";
                }
                else {
                    temperature.innerHTML = Math.floor(json.main.temp - kelvin) + "\u00B0<span>C</span>";
                }
            });
            //BACKGROUND CHANGE
            if (Math.floor(json.main.temp - kelvin) < 10) {
                body.style.backgroundColor = '#9EDBFE';
            }
            else if (Math.floor(json.main.temp - kelvin) < 20) {
                body.style.backgroundColor = '#E7DC7F';
            }
            else if (Math.floor(json.main.temp - kelvin) >= 20) {
                body.style.backgroundColor = '#E7987F';
            }
        });
    }
});
// 10 CITIES WEATHER

function city_weather(city){
    var city_background = document.querySelector('#'+ city+'-background');
    var city_temp = document.querySelector('#'+ city);
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.replace('-',' ') + '&appid=125c5200b8f11dd17a867da70395382c&lang=fr')
        .then(function (response) {
        var data_city = response.json();
        return data_city;
    })
        .then(function (data_city) {
        var city_icon = 'assets/icons/white/png/64x64/' + data_city.weather[0].icon + '.png';
        city_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + city_icon + "\" alt=\"\"> " + Math.floor(data_city.main.temp - kelvin) + "\u00B0<span>C</span> ";
        // C° to F°
        var count = 0;
        city_temp.addEventListener('click', function () {
            count += 1;
            if (count % 2 !== 0) {
                city_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + city_icon + "\" alt=\"\"> " + Math.floor((data_city.main.temp - kelvin) * (9 / 5) + 32) + "\u00B0<span>F</span> ";
            }
            else {
                city_temp.innerHTML = "<img class=\"icon-weather\" src=\"" + city_icon + "\" alt=\"\"> " + Math.floor(data_city.main.temp - kelvin) + "\u00B0<span>C</span> ";
            }
        });
        //IMAGE CHANGE
        if (Math.floor(data_city.main.temp - kelvin) < 10) {
            city_background.src = 'assets/images/'+city+'-hiver.jpg';
        }
        else if (Math.floor(data_city.main.temp - kelvin) < 20) {
            city_background.src = 'assets/images/'+city+'-printemps.jpg';
        }
        else if (Math.floor(data_city.main.temp - kelvin) >= 20) {
            city_background.src = 'assets/images/'+city+'-ete.jpg';
        }
    });
}

