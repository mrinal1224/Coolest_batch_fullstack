//Async Await
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const form = document.querySelector('form');
const searchField = document.querySelector('.searchField')

let target = 'Milan'

form.addEventListener('submit' , search)



function search(e){
   e.preventDefault() // it will not let your form refresh
   target = searchField.value

   fetchData(target)

}






async function fetchData(target){
    let endpoint = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`
    
    const response = await fetch(endpoint)

    const data = await response.json()

    console.log(data)


    let currentTemp = data.current.temp_c;
    let locationName = data.location.name;
    let localTime = data.location.localtime

    let currentCondition = data.current.condition.text
    let conditonLogo = data.current.condition.icon

    console.log(currentTemp)
    console.log(locationName)

    updateWeatherData(locationName , currentTemp ,localTime , currentCondition , conditonLogo)



}


function updateWeatherData(cityName , temperature , time , currentCondition , conditonLogo){
  cityField.innerText = cityName
  temperatureField.innerText = temperature
  dateField.innerText = time
  weatherField.innerText = currentCondition
  emojiField.src = conditonLogo
}


fetchData('Mumbai')





