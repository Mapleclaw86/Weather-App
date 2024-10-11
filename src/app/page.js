export default function Home() {
  return (
    <div>
      <header>
        <h1>Weather App</h1>
      </header>
      <div className="weatherInfo">
        <button class="button">
          Temperature: <br></br>64°F
        </button>
        <button class="button">
          Conditions: <br></br>Mostly Cloudy
        </button>
        <button class="button">
          Wind Speed: <br></br>7mph
        </button>
        <button class="button">
          Precipitation: <br></br>5%
        </button>
        <button class="button">
          Humidity: <br></br>57%
        </button>
      </div>
      <div class="dateTime">
        <p>Wednesday Oct 9, 6:41PM</p>
      </div>
    </div>
  );
}
