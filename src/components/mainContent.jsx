import React from "react";
import "../scss/style.css"; 

function MainContent({ temperature, wind, description, day1, day2, day3 }) {
  return (
    <div className="section">
      <div className="section__item1 section__item">
        <h2>Today</h2>
        <strong>Temperature: {temperature}</strong><br />
        <strong>Wind: {wind}</strong><br />
        <strong>Description: {description}</strong>
      </div>
      <div className="section__item2 section__item">
        <h2>Tommorow</h2>
        <strong>Temperature: {day1.temperature}</strong><br />
        <strong>Wind: {day1.wind}</strong>
      </div>
      <div className="section__item3 section__item">
        <h2>Next-Tommorow</h2>
        <strong>Temperature: {day2.temperature}</strong><br />
        <strong>Wind: {day2.wind}</strong>
      </div>
      <div className="section__item4 section__item">
        <h2>Next-Next-Tommorow</h2>
        <strong>Temperature: {day3.temperature}</strong><br />
        <strong>Wind: {day3.wind}</strong>
      </div>
    </div>
  );
}

export default MainContent;
