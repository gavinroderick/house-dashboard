import React from "react";
export class FeelsLike extends React.Component {
  render() {
    return <p title="feels like">🤔{this.props.value}°C</p>;
  }
}
