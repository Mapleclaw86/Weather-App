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
        <p>Date and Time</p>
      </div>
    </div>
  );
}
