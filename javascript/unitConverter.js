let inputKilometers = document.getElementById("KilometersInput");
let displayMiles = document.getElementById("displayMiles");
let CelsiusInput = document.getElementById("CelsiusInput");
let displayFahrenheit = document.getElementById("displayFahrenheit");

let milesConverter = function (inputKilometers, displayMiles) {
  let kilometers = Number(inputKilometers.value);
  let miles = kilometers * 0.621371;
  displayMiles.innerHTML = `${kilometers} kilometers is equal too ${Math.round(miles * 100) / 100} miles`;
}

let CelsiusConverter = function (CelsiusInput ,displayFahrenheit ) {
  let Celsius = Number(CelsiusInput.value);
  let Fahrenheit = Celsius * 1.8 + 32;
  displayFahrenheit.innerHTML = `${Celsius} C is equal too ${Fahrenheit} F`;
}