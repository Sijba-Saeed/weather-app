import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather]=useState("");
  const apiKey=import.meta.env.VITE_APP_APIKEY
  const handleFetchWeather =async(e)  => {  
    e.preventDefault();
try{
  const response =await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  );
  const data =await response.json();
  setWeather(data);
  console.log(data);
} catch (error) {

  console.log(error);
}
};
  return (
    <div>
      <div>
        <form onSubmit={handleFetchWeather}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Fetch Weather</button>
        </form>
        <div>
          {weather &&(
            <div>
          <h1>{(weather.main.temperature -273.12).toFixed(2)} &deg;C</h1>
          <h2>{weather.main.pressure}%</h2>
          </div>
        )
}
        </div>
      </div>
    </div>
  );
}
