import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY = "5ab6eb50c0cfc9e011bc1444d5839537";
export const Weather = () => {

    const [weather, setWeather] = useState(null);


    {/* todo gérer l'input de la ville*/}

    const cityInput = 'Lille'

    const getWeather = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: cityInput, //q=city
                appid: API_KEY,
                units: 'metric',
            }
        });
        setWeather(response.data);



    }

    useEffect(() => {
        getWeather();
    }, []);

    return ( <> 
            <div>
                <h1>Résultat de la requête : </h1>
                <p>{JSON.stringify(weather)} </p>

                <pre>{JSON.stringify(weather, null, 2)}</pre>    {/* vient de stackoverflow.com/questions/30765163/pretty-printing-json-with-react */}
            </div>
        </> );


};
