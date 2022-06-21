import React from "react";
export class FeelsLike extends React.Component {
  render() {
    return <h5>Feels like: {this.props.value}°C</h5>;
  }
}
