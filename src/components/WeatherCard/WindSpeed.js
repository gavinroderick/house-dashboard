import React from "react";
export class Wind extends React.Component {
  render() {
    return <h5>Wind Speed: {this.props.value}mph</h5>;
  }
}
