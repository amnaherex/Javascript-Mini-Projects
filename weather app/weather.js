let inputbox = document.querySelector(".search-input")
let searchbtn = document.querySelector(".search-btn")
let city = document.querySelector(".city-name")
let temp = document.querySelector(".temperature")
let des = document.querySelector(".description")
let wind = document.querySelector(".wind")
let feel = document.querySelector(".feels")

let userinput;
const API_KEY = '709a7a1f72a02a036a276779ddad4e45'

async function Weatherdata(userinput) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput}&appid=${API_KEY}&units=metric`)
    let data = await response.json()
    console.log(data)
    
    if(userinput !== "" && (data.cod === 200 || data.cod === "200"))
    {
       city.innerText = data.name
       des.innerText = data.weather[0].main
       temp.innerText = Math.floor(data.main.temp) + "°"
       wind.innerText = "Wind speed: "+ data.wind.speed + " km/h"
       feel.innerText = "Feels like: "+ data.main.feels_like

    }
    else{
       city.innerText = "City not found!";
        des.innerText = "";
        temp.innerText = "";
        wind.innerText = "";
        feel.innerText = "";
        return; 
    }
}

searchbtn.addEventListener(
    "click",
    function(params) {

        userinput = inputbox.value.trim()
        
        Weatherdata(userinput);
    }
)

inputbox.addEventListener("keypress" , function(event)
{
    if(event.key === "Enter"){
        userinput = inputbox.value.trim()
        Weatherdata(userinput)
    }
})
