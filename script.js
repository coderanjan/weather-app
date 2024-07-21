 const apikey="64eaccaf3c152025caa6a75d98239340";
 const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const temp=document.getElementById("city");
const submit=document.getElementById("get");

const country=document.getElementById("country");
const temperature=document.getElementById("currenttemperature");

submit.addEventListener('click',getweather)

const feel=document.getElementById("feel");

const max=document.getElementById("max");
const min=document.getElementById("min");

const cloud=document.getElementById("cloud")



// function func(){
//     console.log(temp.value);
// }



async function getweather(){
    const response= await fetch(apiurl+ `&q=${temp.value}`+`&appid=${apikey}`);
     const data=await response.json();

      console.log(data);

     country.innerText +=`${   temp.value}`;
     temperature.innerText=` Current temperature :${  data.main.temp} °C`

      feel.innerText +=`Feels like: ${data.main.feels_like}  °C`;

      max.innerText +=`Max: ${data.main.temp_max}  °C` ;
      min.innerText +=`min: ${data.main.temp_min}  °C` ;

      const iconurl=` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

       cloud.innerHTML +=  ` ${data.weather[0].description }<img src="${iconurl}">  `;

}