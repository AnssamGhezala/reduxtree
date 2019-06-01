import React, { Component } from "react";
import "./NodeB.css";
import NodeD from "../NodeD/NodeD";

class NodeB extends Component {
  render() {
    return (
      <div className="Tree element">
        <center> B</center>
        <NodeD />
      </div>
    );
  }
}

export default NodeB;
