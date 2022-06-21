import React, { useEffect, useState } from "react";
import { Currently } from "./Currently";
import { FeelsLike } from "./FeelsLike";
import { Wind } from "./WindSpeed";

const url =
  "https://dark-sky.p.rapidapi.com/55.974560,-3.161040?exclude=minutely%2Chourly%2Cdaily%2Calerts%2Cflags&units=auto&lang=en";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4950bc2857mshc4201d2fd651488p188521jsnf4cea1e3e9bc",
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
    <div className="weather">
      <h3>The weather in Leith is: {summary}</h3>

      <FeelsLike value={feelsLike}></FeelsLike>
      <Currently value={currently}></Currently>
      <Wind value={wind}></Wind>
    </div>
  );
}
