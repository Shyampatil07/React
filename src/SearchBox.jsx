import TextField from"@mui/material/TextField";
import Button from"@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }){
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    const API_URL = "";
    const API_KEY = "";


    let getWeatherInfo = async () =>{
        try {
           let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
       
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result; 
        } catch (error) {
           throw error;
        } 
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        evt.preventDefault();
        try {
        console.log(city);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setErr(false);
        setCity("");
        } catch (error) {
             setErr(true);
             setCity("");
        }
        
    };

    return(
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city"
                label="City Name"
                variant="outlined"
                required
                value={city}
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
                {err && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    );
    
}
