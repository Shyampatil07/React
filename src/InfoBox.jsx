import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    const Init_Url = "https://cdn.sanity.io/images/cphrnle8/production/adbed67f4f4f280b41e21ebafafa7f800dd3d0d9-1440x811.jpg?rect=315,0,811,811&w=1200&h=1200&q=100";

    let Cold_Url="https://www.shutterstock.com/image-vector/freezing-boy-suffering-snowy-cold-600nw-2397810809.jpg";
    let Hot_Url="https://img.freepik.com/free-vector/flat-summer-heat-illustration-with-man-sweating-sun_23-2149433187.jpg?semt=ais_hybrid&w=740&q=80";
    let Rain_Url="https://thumbs.dreamstime.com/z/rainy-weather-icon-clouds-umbrella-24120412.jpg";
    
  

    return (
        <div className="InfoBox">
            
            <div className="cardCon">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 95
                        ? Rain_Url
                        : info.temp > 25
                        ? Hot_Url
                        : Cold_Url
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                        info.humidity > 95
                        ? <ThunderstormIcon/>
                        : info.temp > 25
                        ? <SunnyIcon/>
                        : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp} &deg;C</p>
                        <p>Humidity = {info.humidity} </p>
                        <p>Min Temp = {info.tempMin} &deg;C</p>
                        <p>Max Temp = {info.tempMax} &deg;C</p>
                        <p>The weather can do described as <i>{info.weather}</i> and feels like {info.temp} &deg;C</p>
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
    )
}