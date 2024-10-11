"use client"
import { useState, useEffect } from "react";

export default function Home() {

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`;
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
      setRainChance(data.current.rainChance_10m)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setLatitude("37.7749");
    setLongitude("-122.4194");
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude]);


  return (
    <div>
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <div className="weatherInfo">
        <button class="button">
          Temperature: <br></br>{temperature}°F
        </button>
        <button class="button">
          Feels Like: <br></br>{apparentTemp}°F
        </button>
        <button class="button">
          Wind Speed: <br></br>{windSpeed}mph
        </button>
        <button class="button">
          Precipitation: <br></br>{rainChance}%
        </button>
        <button class="button">
          Humidity: <br></br>{humidity}%
        </button>
      </div>
      <div class="dateTime">
        <p>Date and Time</p>
      </div>
    </div>
  );
}
