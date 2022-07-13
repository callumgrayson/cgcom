import React from "react";
import { LineChart } from "react-chartkick";
import "chartkick/chart.js";
import "./styles.css";
import ageSlams from "./age_slams.json";
import yearSlams from "./year_slams.json";

const TennisBig3 = () => {
  const dataAge = Object.entries(ageSlams).map((arr, idx) => {
    return {
      name: arr[0],
      data: arr[1],
    };
  });
  const dataYear = Object.entries(yearSlams).map((arr, idx) => {
    return {
      name: arr[0],
      data: arr[1],
    };
  });

  return (
    <div className="tennis_big_3 box">
      <h3>Tennis Big 3</h3>

      <div className="tennis_big_3 chart_container">
        <h4>Big 3 Grand Slams by Age</h4>
        <div className="tennis_big_3 line_container">
          <LineChart
            data={dataAge}
            curve={false}
            points={false}
            xtitle="Age"
            ytitle="Slams"
            height={"100%"}
            width={"100%"}
            // dataset={{ borderWidth: 1 }} // Changes the line thickness
          />
        </div>
      </div>

      <div className="tennis_big_3 chart_container">
        <h4>Big 3 Grand Slams by Year</h4>
        <div className="tennis_big_3 line_container">
          <LineChart
            data={dataYear}
            curve={false}
            points={false}
            xtitle="Year"
            ytitle="Slams"
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default TennisBig3;
