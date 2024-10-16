"use client"
import { useState, useEffect } from "react";

export default function Home() {

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,is_day,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`;
  const [temperature, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [apparentTemp, setApparentTemp] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [rainChance, setRainChance] = useState("");

  const getWeather = async () => {
    try {
      const response = await fetch(weatherAPI);
      const data = await response.json();
      console.log("getting weather.")
      console.log(data);
      setTemp(data.current.temperature_2m);
      setHumidity(data.current.relative_humidity_2m);
      setApparentTemp(data.current.apparent_temperature);
      setWindSpeed(data.current.wind_speed_10m);
      setRainChance(data.current.precipitation_probability)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setLatitude(null);
    setLongitude(null);
  }, []);

  return (
    <div>
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <div className="weatherInfo">
        <div className="button">
          Temperature: <br></br>{temperature}°F
        </div>
        <div className="button">
          Feels Like: <br></br>{apparentTemp}°F
        </div>
        <div className="button">
          Wind Speed: <br></br>{windSpeed}mph
        </div>
        <div className="button">
          Precipitation: <br></br>{rainChance}%
        </div>
        <div className="button">
          Humidity: <br></br>{humidity}%
        </div>
      </div>
      <div className="dateTime">
        <p>Enter Location Below</p>
      </div>
      <br></br>
      <label for="latitude">Latitude: </label>
      <input type="text" id="input" value={latitude} onChange={(e) => setLatitude(e.target.value)} name="latitude"/>
      <label for="longitude">__Longitude: </label>
      <input type="text" id="input" value={longitude} onChange={(e) => setLongitude(e.target.value)}name="longitude"/>
      <button onClick={getWeather}>__Submit</button>
    </div>
  );
}
