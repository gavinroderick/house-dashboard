import "./App.css";
import React from "react";
import { Weather } from "./components/WeatherCard/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather></Weather>
      </header>
    </div>
  );
}

export default App;
