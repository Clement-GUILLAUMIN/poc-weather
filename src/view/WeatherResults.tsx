import { useEffect, useState } from "react";
import { Error } from "./Error"


export const WeatherResults = (
    { hasError, weatherJSON, inputCity }
    : { hasError : boolean;
        weatherJSON : any; //todo typage
        inputCity : string;
    }  

) => {

    const getCurrentWeatherDescription = (weatherJSON: any) => 
        {if (weatherJSON) {
            const weather = weatherJSON.weather[0]
            return JSON.stringify(weather.description)
        } else {
            return ""
        }
    }

    if (hasError){
        return (
            < Error />
        )

    } else return (
    <div>
                <p className="title2">Météo pour {inputCity} </p>
                <ul>
                    <li> Temps actuel : { getCurrentWeatherDescription(weatherJSON) }  </li>
                    <li> </li>
                    <li> </li>
                </ul>

                <p> ==============DEBUG, à supprimer =========== </p>
                <p>{JSON.stringify(weatherJSON)} </p>

                <pre>{JSON.stringify(weatherJSON, null, 2)}</pre>    {/* vient de stackoverflow.com/questions/30765163/pretty-printing-json-with-react */}
                
            </div>
    )
}
