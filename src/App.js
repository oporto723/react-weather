 import React from 'react';

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          />

          <div className="location-box">
            <div className="location">Vancouver, CAN</div>
            <div className="date">April, 2016</div>
          </div>

          <div className="weather-box">
            <div className="temp">15c</div>
            <div className="weather">Sunny</div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
