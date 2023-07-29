import React, {useEffect, useState} from "react";
import MainContent from "./mainContent";
import "../scss/style.css"
import Api from "../components/Api";

function GoWeather() {
    const [goweatherData, setgoWeather] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(Api);
            const json = await response.json();
            setgoWeather(json.results[0])
        }

        fetchData();
    });

    if (!goweatherData) {
        return null;
    }

    const {
        temperature: temperature,
        wind: wind,
        description: descriptiopn
    } = goweatherData;

    const day1 = forecast[0];
    const day2 = forecast[1];
    const day3 = forecast[2];

    const {
        day: day1Day,
        temperature: day1Temperature,
        wind: day1Wind
    } = day1;
    const {
        day: day2Day,
        temperature: day2Temperature,
        wind: day2Wind
    } = day2;
    const {
        day: day3Day,
        temperature: day3Temperature,
        wind: day3Wind
    } = day3;

    return (
        <div>

            <input 

            type="text" 

            value={inputName}
            onChange={(e) => setInputName(e.target.value)}

            />

            <MainContent
            
            temperature={temperature}
            wind={wind}
            description={descriptiopn}

            day1={day1}
            day2={day2}
            day3={day3}

            />
        </div>
    );
};


export default GoWeather;