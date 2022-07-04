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

export function Weather() {
  const [summary, setSummary] = useState([]);
  const [feelsLike, setFeelsLike] = useState([]);
  const [currently, setCurrently] = useState([]);
  const [wind, setWind] = useState([]);
  const [weatherData, setData] = useState([]);

  const parseData = (raw) => {
    setSummary(raw.currently.summary);
    setFeelsLike(raw.currently.apparentTemperature);
    setCurrently(raw.currently.temperature);
    setWind(raw.currently.windSpeed);
    setData(raw.currently);
  };

  useEffect(() => {
    const getData = async () => {
      await fetch(url, options)
        .then((res) => res.json())
        .then((json) => parseData(json))
        .catch((err) => console.error("error:" + err));
    };
    getData();
  }, [summary, feelsLike, currently, wind, weatherData]);
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl space-y-2 p-3">
      <div className="subData text-md  flex space-x-6">
        <Currently value={currently}></Currently>
        <FeelsLike value={feelsLike}></FeelsLike>
        <Wind value={wind}></Wind>
      </div>
      <div>
        <p className="text-l font-medium">📍Leith - {new Date().toDateString()}</p>
        <p className="italic lowercase">{summary}</p>
      </div>
    </div>
  );
}
