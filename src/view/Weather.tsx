import { useEffect, useState } from "react";
import axios from 'axios';
import { WeatherInput } from "./WeatherInput";
import { WeatherResults } from "./WeatherResults"

const API_KEY = "5ab6eb50c0cfc9e011bc1444d5839537";
export const Weather = () => {

    const [weatherJSON, setWeatherJSON] = useState(null);
    const [inputCity, setInputCity] = useState("");
    const [hasError, setHasError] = useState(false);
    const [queryHasBeenSent, setQueryHasBeenSent ] = useState(false) ;

   

    const getWeatherJSON = async () => {
        setQueryHasBeenSent(true);
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: inputCity,
                appid: API_KEY,
                units: 'metric',
                lang: 'fr',
            }
        });
        setWeatherJSON(response.data);



    }

    useEffect(() => {
        if (inputCity){
            getWeatherJSON();
        }
    }, [inputCity]);

    

    return ( <> 

            <h1>Météo pour une ville donnée </h1>

            <div> 
                <WeatherInput inputText={inputCity} setInputText={setInputCity} />
            </div>
            
            <div>
                {queryHasBeenSent && <WeatherResults hasError={hasError} weatherJSON={weatherJSON} inputCity={inputCity} /> }
            </div>

            
        </> );


};
