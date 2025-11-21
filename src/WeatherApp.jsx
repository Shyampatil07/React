import { useState } from "react";
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){

    const [weatherInfo, setWeather] = useState({
        city: "Delhi",
        feels_like: 24.84,
        temp: 25.05,
        tempMin: 25.5,
        tempMax: 25.0,
        humidity: 47,
        weather: "hazer",
    });

    let updateInfo = (newInfo) =>{
        setWeather(newInfo);
    };

    return(
        <div style={{ textAlign: "center", marginLeft: "600px" }}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};