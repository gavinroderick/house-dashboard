import React from "react";
export class Wind extends React.Component {
  render() {
    return <p title="wind speed">💨 {this.props.value}mph</p>;
  }
}
