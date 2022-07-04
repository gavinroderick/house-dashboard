import React from "react";
export class Currently extends React.Component {
  render() {
    return <p title="temperature">🌡️ {this.props.value}°C</p>;
  }
}
