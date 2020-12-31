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
      } catch (error) {
        console.error("Error:", error);
        error_message.innerHTML = 'Veuillez bien orthographier le nom de la ville en anglais.';
      }
    }
    callingFn();
  }
});





