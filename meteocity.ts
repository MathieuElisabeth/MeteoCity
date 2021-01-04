let input = document.querySelector('input');

const kelvin: number = 273;

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    let city: string = input.value;
    let icon = document.querySelector('.icon-weather') as HTMLImageElement;
    let temperature = document.querySelector('.weather-temp p');
    let location = document.querySelector('.location');
    let error_message = document.querySelector('.error-message');
    async function callingFn() {
      try {
        const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=' + city.toLowerCase(), {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        temperature.innerHTML = `${Math.floor(json.main.temp - kelvin)}°<span>C</span>`;
        location.innerHTML = json.name + ', ' + json.sys.country;
        icon.src = 'images/icons/black/png/64x64/' + json.weather[0].icon + '.png';
        error_message.innerHTML = '';

        // C° to F°
        let count: number = 0;
        temperature.addEventListener('click', () => {
          count += 1;
          if (count % 2 !== 0) {
            temperature.innerHTML = `${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span>`;
          } else {
            temperature.innerHTML = `${Math.floor(json.main.temp - kelvin)}°<span>C</span>`;
          }
        })

      } catch (error) {
        console.error("Error:", error);
        error_message.innerHTML = 'Veuillez bien orthographier le nom de la ville en anglais.';
      }
    }
    callingFn();
  }
});

// 10 CITIES WEATHER

let paris_background = document.querySelector('#paris-background') as HTMLImageElement;
let paris_temp = document.querySelector('#paris');

async function parisWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=paris', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const paris_data = await response.json();
    let paris_icon = 'images/icons/white/png/64x64/' + paris_data.weather[0].icon + '.png';
    paris_temp.innerHTML = `<img class="icon-weather" src="${paris_icon}" alt=""> ${Math.floor(paris_data.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    paris_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        paris_temp.innerHTML = `<img class="icon-weather" src="${paris_icon}" alt=""> ${Math.floor((paris_data.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        paris_temp.innerHTML = `<img class="icon-weather" src="${paris_icon}" alt=""> ${Math.floor(paris_data.main.temp - kelvin)}°<span>C</span> `;
      }
    })


    //BACKGROUND CHANGE
    if (Math.floor(paris_data.main.temp - kelvin) < 10) {
      paris_background.src = 'images/paris-hiver.jpg';
    } else if (Math.floor(paris_data.main.temp - kelvin) < 20) {
      paris_background.src = 'images/paris-printemps.jpg';
    } else if (Math.floor(paris_data.main.temp - kelvin) > 20) {
      paris_background.src = 'images/paris-ete.jpg';
    }


  } catch (error) {
    console.error("Error:", error);
  }
}
parisWeather();


let athens_background = document.querySelector('#athens-background') as HTMLImageElement;
let athens_temp = document.querySelector('#athens');

async function athensWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=athens', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let athens_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    athens_temp.innerHTML = `<img class="icon-weather" src="${athens_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    athens_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        athens_temp.innerHTML = `<img class="icon-weather" src="${athens_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        athens_temp.innerHTML = `<img class="icon-weather" src="${athens_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      athens_background.src = 'images/athenes-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      athens_background.src = 'images/athenes-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      athens_background.src = 'images/athenes-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
athensWeather();


let tokyo_background = document.querySelector('#tokyo-background') as HTMLImageElement;
let tokyo_temp = document.querySelector('#tokyo');


async function tokyoWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=tokyo', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let tokyo_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    tokyo_temp.innerHTML = `<img class="icon-weather" src="${tokyo_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    tokyo_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        tokyo_temp.innerHTML = `<img class="icon-weather" src="${tokyo_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        tokyo_temp.innerHTML = `<img class="icon-weather" src="${tokyo_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      tokyo_background.src = 'images/tokyo-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      tokyo_background.src = 'images/tokyo-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      tokyo_background.src = 'images/tokyo-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
tokyoWeather();

let bogota_background = document.querySelector('#bogota-background') as HTMLImageElement;
let bogota_temp = document.querySelector('#bogota');

async function bogotaWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=bogota', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let bogota_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    bogota_temp.innerHTML = `<img class="icon-weather" src="${bogota_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    bogota_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        bogota_temp.innerHTML = `<img class="icon-weather" src="${bogota_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        bogota_temp.innerHTML = `<img class="icon-weather" src="${bogota_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      bogota_background.src = 'images/bogota-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      bogota_background.src = 'images/bogota-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      bogota_background.src = 'images/bogota-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
bogotaWeather();

let madrid_background = document.querySelector('#madrid-background') as HTMLImageElement;
let madrid_temp = document.querySelector('#madrid');

async function madridWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=madrid', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let madrid_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    madrid_temp.innerHTML = `<img class="icon-weather" src="${madrid_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    madrid_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        madrid_temp.innerHTML = `<img class="icon-weather" src="${madrid_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        madrid_temp.innerHTML = `<img class="icon-weather" src="${madrid_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      madrid_background.src = 'images/madrid-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      madrid_background.src = 'images/madrid-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      madrid_background.src = 'images/madrid-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
madridWeather();

let london_background = document.querySelector('#london-background') as HTMLImageElement;
let london_temp = document.querySelector('#london');


async function londonWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=london', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let london_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    london_temp.innerHTML = `<img class="icon-weather" src="${london_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    london_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        london_temp.innerHTML = `<img class="icon-weather" src="${london_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        london_temp.innerHTML = `<img class="icon-weather" src="${london_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      london_background.src = 'images/londres-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      london_background.src = 'images/londres-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      london_background.src = 'images/londres-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
londonWeather();

let sydney_background = document.querySelector('#sydney-background') as HTMLImageElement;
let sydney_temp = document.querySelector('#sydney');

async function sydneyWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=sydney', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let sydney_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    sydney_temp.innerHTML = `<img class="icon-weather" src="${sydney_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    sydney_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        sydney_temp.innerHTML = `<img class="icon-weather" src="${sydney_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        sydney_temp.innerHTML = `<img class="icon-weather" src="${sydney_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      sydney_background.src = 'images/sydney-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      sydney_background.src = 'images/sydney-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      sydney_background.src = 'images/sydney-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
sydneyWeather();

let newyork_background = document.querySelector('#newyork-background') as HTMLImageElement;
let newyork_temp = document.querySelector('#newyork');

async function newyorkWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=new%20york', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let newyork_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    newyork_temp.innerHTML = `<img class="icon-weather" src="${newyork_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    newyork_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        newyork_temp.innerHTML = `<img class="icon-weather" src="${newyork_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        newyork_temp.innerHTML = `<img class="icon-weather" src="${newyork_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      newyork_background.src = 'images/new-york-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      newyork_background.src = 'images/new-york-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      newyork_background.src = 'images/new-york-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
newyorkWeather();

let seoul_background = document.querySelector('#seoul-background') as HTMLImageElement;
let seoul_temp = document.querySelector('#seoul');

async function seoulWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=seoul', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let seoul_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    seoul_temp.innerHTML = `<img class="icon-weather" src="${seoul_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    seoul_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        seoul_temp.innerHTML = `<img class="icon-weather" src="${seoul_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        seoul_temp.innerHTML = `<img class="icon-weather" src="${seoul_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      seoul_background.src = 'images/seoul-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      seoul_background.src = 'images/seoul-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      seoul_background.src = 'images/seoul-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
seoulWeather();

let singapour_background = document.querySelector('#singapour-background') as HTMLImageElement;
let singapour_temp = document.querySelector('#singapour');

async function singapourWeather() {
  try {
    const response = await fetch('https://v1.nocodeapi.com/mathieuelisabeth/ow/obILsVeafuGfmXyM/byCityName?q=singapour', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    let singapour_icon = 'images/icons/white/png/64x64/' + json.weather[0].icon + '.png';
    singapour_temp.innerHTML = `<img class="icon-weather" src="${singapour_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;

    // C° to F°
    let count: number = 0;
    singapour_temp.addEventListener('click', () => {
      count += 1;
      if (count % 2 !== 0) {
        singapour_temp.innerHTML = `<img class="icon-weather" src="${singapour_icon}" alt=""> ${Math.floor((json.main.temp - kelvin) * (9 / 5) + 32)}°<span>F</span> `;
      } else {
        singapour_temp.innerHTML = `<img class="icon-weather" src="${singapour_icon}" alt=""> ${Math.floor(json.main.temp - kelvin)}°<span>C</span> `;
      }
    })

    //BACKGROUND CHANGE
    if (Math.floor(json.main.temp - kelvin) < 10) {
      singapour_background.src = 'images/singapour-hiver.jpg';
    } else if (Math.floor(json.main.temp - kelvin) < 20) {
      singapour_background.src = 'images/singapour-printemps.jpg';
    } else if (Math.floor(json.main.temp - kelvin) > 20) {
      singapour_background.src = 'images/singapour-ete.jpg';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
singapourWeather();




