import React, { Component } from "react";
import "./Node.css";

class Node extends Component {
  render() {
    return <div className="Node"> {this.props.title} </div>;
  }
}

export default Node;
