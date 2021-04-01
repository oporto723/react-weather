 import React, { useState } from 'react';

 const API_KEY = process.env.REACT_APP_API_KEY;
 const API_BASE = "https://api.openweathermap.org/data/2.5/";
 

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${API_BASE}weather?q=${query}&units=metric&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        console.log(result)
      });
    }
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
          </div>

          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date"> {new Date().toLocaleString()}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>

        
      </main>
    </div>
  );
}

export default App;
