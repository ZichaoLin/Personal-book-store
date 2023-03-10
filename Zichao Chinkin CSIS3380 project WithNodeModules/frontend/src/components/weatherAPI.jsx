//Init express body-parser nodemon mongoose

import axios from "axios";
import { useState } from "react";

const Weather=()=>{
const city = "Vancouver";
const apikey = "1a88134aca055f658f324283d37732a1"
const units = "metric"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`

// ASYNC and AWAIT
const [weatherInfo, setWeatherInfo] = useState();

const weatherApp = async ()=>{
    try
    {
    const res = await axios.get(url)
    const data = res.data;
        setWeatherInfo("Today's Weather: "+ data.main.temp.toFixed(1) + " C, " + data.weather[0].description);
   }
   catch(err){
    console.log("error: ", err)
   }
}

weatherApp();

return (
<div>
   {weatherInfo}
</div>

);

}

export default Weather;