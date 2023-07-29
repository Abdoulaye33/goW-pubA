import "../scss/style.css";
import GoWeather from "./goweather";

function MainContent({Temperature, Wind, Description}) {
    return (

    <div className="section">
        <div className="section__item1 section__item">
            <h2>Today</h2>
            <strong>Temperature : ${Temperature} </strong>
            <strong>Wind : ${Wind} </strong>
            <strong>Description : ${Description} </strong>

        </div>
        <div className="section__item2 section__item">

            <h2>Tommorow</h2>
            <strong>Temperature : ${day1Temperature} </strong>
            <strong>Wind : ${day1Wind} </strong>

        </div>
        <div className="section__item3 section__item">
            
            <h2>Next-Tommorow</h2>
            <strong>Temperature : ${day2Temperature} </strong>
            <strong>Wind : ${day2Wind} </strong>

        </div>
        <div className="section__item4 section__item">

            <h2>Next-Next-Tommorow</h2>
            <strong>Temperature : ${day3Temperature} </strong>
            <strong>Wind : ${day3Wind} </strong>

        </div>
    </div>

    );
}


export default MainContent;