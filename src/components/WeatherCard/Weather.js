import React, { useEffect, useState } from "react";
import { Currently } from "./Currently";
import { FeelsLike } from "./FeelsLike";
import { Wind } from "./WindSpeed";

const url =
  "https://dark-sky.p.rapidapi.com/55.974560,-3.161040?exclude=minutely%2Chourly%2Cdaily%2Calerts%2Cflags&units=auto&lang=en";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_WEATHER_API_KEY,
    "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
  },
};

const initialWeatherData = {
  summary: 0,
  feelsLike: 0,
  currently: 0,
  wind: 0,
};

export function Weather() {
  const [weatherData, setWeatherData] = useState({ initialWeatherData });
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setWeatherData({
          summary: json.currently.summary,
          feelsLike: json.currently.apparentTemperature,
          currently: json.currently.temperature,
          wind: json.currently.windSpeed,
        });
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl space-y-2 p-3">
      <div className="subData text-md  flex space-x-6">
        <Currently value={weatherData.currently}></Currently>
        <FeelsLike value={weatherData.feelsLike}></FeelsLike>
        <Wind value={weatherData.wind}></Wind>
      </div>
      <div>
        <p className="text-l font-medium">
          {new Date().toDateString()} -{" "}
          <span className="italic lowercase">{weatherData.summary}</span>
        </p>
        <p>📍Leith</p>
      </div>
    </div>
  );
}
