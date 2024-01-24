import React, {useState, useEffect, useDebugValue} from "react";
import axios from "axios";

const currentWeather = () => {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        async function fetchWeatherData() {
            try{
                const response = await axios.get('api/weather/current');
                setWeatherData(response);
            } catch (error){
                console.log('error while fetching data: ', error);
            }
        }
        fetchWeatherData();
    }, []);

    return (
        <div>
            {/*display weather data */}
        </div>
    );
};

export default currentWeather;