import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY = "5ab6eb50c0cfc9e011bc1444d5839537";
export const Weather = () => {

    const getWeather = async () => {
        await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: '', //q=city
                appid: API_KEY,
                units: 'metric',
            }
        });

    }


    return (<></>);


};
