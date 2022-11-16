import React, { useState } from "react";
import back from './back.jpg';
import "./App.css";

const App = () => {
    const [weather, setWeather] = useState('');

    async function Data() {
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('search').value}&APPID=45df2c727cd9ec561a143e9fc94de407`);
        const json = await response.json();
        var list = [];
        list.push(
          <>
            <h1 key={1} id="name">{json.name}, {json.sys.country}</h1>
            <div key={2} id="tempdiv">
                <h2 key={3} id="temp">{Math.floor(((json.main.temp-273.15)*1.8)+32)}&deg;<span key={4} id="fahren">F</span></h2>
                <h2 key={5} id="cloud"><img key={6} src={`http://openweathermap.org/img/w/${json.weather[0].icon}.png`} id="icon" alt="weather-icon"/><span key={7}>{json.weather[0].main}</span></h2>
            </div>
          </>
        )
        setWeather(list);
    }

    return (
        <div id="background" style={{backgroundImage: `url(${back})`}}>
            <div id="content">
                <div id="weather">
                    {weather}
                </div>
                <div id="sarea">
                    <input type='text' id="search" name="search" placeholder='Search For A City' />
                    <button onClick={() => Data()}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default App;