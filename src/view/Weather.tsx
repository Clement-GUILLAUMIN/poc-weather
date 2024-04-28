import { useEffect, useState } from "react";
import axios from 'axios';
import { WeatherInput } from "./WeatherInput";

const API_KEY = "5ab6eb50c0cfc9e011bc1444d5839537";
export const Weather = () => {

    const [weather, setWeather] = useState(null);
    const [inputCity, setInputCity] = useState("");
    const [hasError, setHasError] = useState(false);

   

    const getWeatherResults = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: inputCity,
                appid: API_KEY,
                units: 'metric',
            }
        });
        setWeather(response.data);



    }

    useEffect(() => {
        if (inputCity){
            getWeatherResults();
        }
    }, [inputCity]);

    const getCoords = (weather: any) => 
        {if (weather) {
            return JSON.stringify(weather.coord)
        } else {
            return ""
        }
    }

    return ( <> 
            <div> 
                <WeatherInput inputText={inputCity} setInputText={setInputCity} />
            </div>

            <div>
                <h1>Météo pour {inputCity} : </h1>
                <p> { getCoords(weather) } </p>

                <p> ========================= </p>
                <p>{JSON.stringify(weather)} </p>

                <pre>{JSON.stringify(weather, null, 2)}</pre>    {/* vient de stackoverflow.com/questions/30765163/pretty-printing-json-with-react */}
                
            </div>
        </> );


};
