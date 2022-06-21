import React from "react";
export class Currently extends React.Component {
  render() {
    return <h5>Temp: {this.props.value}°C</h5>;
  }
}
