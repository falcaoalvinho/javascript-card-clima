const body = document.querySelector('body');
const APIKey = '5a69e1a297ec15a6c66557de2e5a8e60';

var button = document.querySelector('button');
var select = document.querySelector("select");

button.addEventListener('click', () => {
    var valueSelect = select.value;
    var description;
    var temperature;

    if (valueSelect == 'Nome do Local'){
        alert('Por favor antes de consultar, selecione um local.');
    }
    else {
        var URL = `https://api.openweathermap.org/data/2.5/weather?q=${valueSelect}&appid=${APIKey}&lang=pt_br`;

        fetch(URL)
        .then((response) => response.json())
        .then(json => {
            temperature = json.main.temp - 273.15; //Temperatura tava vindo em Kelvin ai dei aquela convertida padrão.
            description = json.weather[0].description;

            let newSection = document.createElement('section');
            body.appendChild(newSection);

            let newH2 = document.createElement('h2');
            newH2.innerText = `${Math.round(temperature)}ºC`
            newSection.appendChild(newH2);

            let newDiv = document.createElement('div');
            newSection.appendChild(newDiv);

            let newH3 = document.createElement('h3');
            newH3.innerText = valueSelect;
            newDiv.appendChild(newH3);

            let newH4 = document.createElement('h4');
            newH4.innerText = description;
            newDiv.appendChild(newH4);
        })
    }
})