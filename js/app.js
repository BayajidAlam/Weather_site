// const API_Key = ``;
const loadTemperature = city =>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`

  fetch(url)
  .then(res =>res.json())
  .then(data => displayTempetature(data))
}


const displayTempetature = data =>{

  setInnerTextById('temp',data.main.temp, data.weather[0].main)

}


const setInnerTextById = (id, text, weather) =>{

  const temperature = document.getElementById(id);
  temperature.innerText = `${text}`

  document.getElementById('weather').innerText = `${weather}`;
}


document.getElementById('btn-search').addEventListener('click',function(){
  const searchField = document.getElementById('search-field');
  const city = searchField.value;
  loadTemperature(city);
  document.getElementById('city-name').innerText = `${city}`
 
})
// default
loadTemperature('dhaka')