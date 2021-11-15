import React from "react";
import "./Section.scss";
import Chart from "react-google-charts";

export default function Section() {
  return (
    <div>
      <section className="section">
        <div className="continer">
          <div className="box"></div>
          <div className="box">
            <Chart
              style={{ color: "#fff" }}
              height={"45vh"}
              chartType="PieChart"
              loader={<div className="loaderBox"><div className="loader"></div></div>}
              data={[
                ["Task", "Hours per Day"],
                ["HTML", 30],
                ["CSS", 15],
                ["SASS", 15],
                ["JavaScript", 15],
                ["React.js", 25],
              ]}
              options={{
                slices: {
                  0: { color: "#E44D26" },
                  1: { color: "#42A5F5" },
                  2: { color: "#BE3361" },
                  3: { color: "#FFCA28" },
                  4: { color: "#61DAFB" },
                },
                legendTextStyle: { color: "#FFF" },
                titleTextStyle: { color: "#FFF" },
                hAxis: {
                  color: "#000",
                },
                chartArea: {
                  backgroundColor: {
                    fill: "#00000000",
                    fillOpacity: 0,
                  },
                },
                backgroundColor: {
                  fill: "#00000000",
                  fillOpacity: 0,
                },
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
