export default function Home() {
  return (
    <div>
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <div className="weatherInfo">
        <button class="button">
          Temperature: <br></br>N/A
        </button>
        <button class="button">
          Conditions: <br></br>N/A
        </button>
        <button class="button">
          Wind Speed: <br></br>N/A
        </button>
        <button class="button">
          Precipitation: <br></br>N/A
        </button>
        <button class="button">
          Humidity: <br></br>N/A
        </button>
      </div>
      <div class="dateTime">
        <p>Wednesday Oct 9, 6:41PM</p>
      </div>
    </div>
  );
}
