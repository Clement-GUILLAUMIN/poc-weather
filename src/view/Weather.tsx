import { useEffect, useState } from "react";
import axios from 'axios';
import { WeatherInput } from "./WeatherInput";

const API_KEY = "5ab6eb50c0cfc9e011bc1444d5839537";
export const Weather = () => {

    const [weatherJSON, setWeatherJSON] = useState(null);
    const [inputCity, setInputCity] = useState("");
    const [hasError, setHasError] = useState(false);

   

    const getWeatherJSON = async () => {
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

    const getCurrentWeatherDescription = (weatherJSON: any) => 
        {if (weatherJSON) {
            const weather = weatherJSON.weather[0]
            return JSON.stringify(weather.description)
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
                <p> { getCurrentWeatherDescription(weatherJSON) } </p>

                <p> ========================= </p>
                <p>{JSON.stringify(weatherJSON)} </p>

                <pre>{JSON.stringify(weatherJSON, null, 2)}</pre>    {/* vient de stackoverflow.com/questions/30765163/pretty-printing-json-with-react */}
                
            </div>
        </> );


};
