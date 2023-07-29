import React, { useEffect, useState } from "react";
import MainContent from "./mainContent";
import "../scss/style.css";
import { inputName } from "../components/Api";

function GoWeather() {
  const [inputValue, setInputValue] = useState("");
  const [goweatherData, setgoWeather] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(inputName(inputValue));

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setgoWeather(json);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchData();
  }, [inputValue]);

  if (!goweatherData) {
    return <span className="loader"></span>;
  }

  const {

        temperature,
        wind,
        description,
        forecast 
    
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <MainContent
        temperature={temperature}
        wind={wind}
        description={description}
        day1={day1}
        day2={day2}
        day3={day3}
      />
    </div>
  );
}

export default GoWeather;
