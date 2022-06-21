import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

const url =
  "https://dark-sky.p.rapidapi.com/55.974560,-3.161040?exclude=minutely%2Chourly%2Cdaily%2Calerts%2Cflags&units=auto&lang=en";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4950bc2857mshc4201d2fd651488p188521jsnf4cea1e3e9bc",
    "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
  },
};

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <h3>The weather in Leith is: {this.props.sum} </h3>

        <FeelsLike feelsLike={this.props.feel}></FeelsLike>
        <Currently temp={this.props.cur}></Currently>
        <Wind wind={this.props.wind}></Wind>
      </div>
    );
  }
}

class FeelsLike extends React.Component {
  render() {
    return <h5>Feels like: {this.props.feelsLike}°C</h5>;
  }
}

class Currently extends React.Component {
  render() {
    return <h5>Temp: {this.props.temp}°C</h5>;
  }
}

class Wind extends React.Component {
  render() {
    return <h5>Wind Speed: {this.props.wind}mph</h5>;
  }
}

function App() {
  const [summary, setSummary] = useState([]);
  const [feelsLike, setFeelsLike] = useState([]);
  const [currently, setCurrently] = useState([]);
  const [wind, setWind] = useState([]);

  const parseData = (raw) => {
    setSummary(raw.currently.summary);
    setFeelsLike(raw.currently.apparentTemperature);
    setCurrently(raw.currently.temperature);
    setWind(raw.currently.windSpeed);
  };

  useEffect(() => {
    const getData = async () => {
      await fetch(url, options)
        .then((res) => res.json())
        .then((json) => parseData(json))
        .catch((err) => console.error("error:" + err));
    };

    getData();
  }, [summary, feelsLike, currently, wind]);

  return (
    <div className="App">
      <header className="App-header">
        <Weather
          wind={wind}
          feel={feelsLike}
          cur={currently}
          sum={summary}
        ></Weather>
      </header>
    </div>
  );
}

export default App;
