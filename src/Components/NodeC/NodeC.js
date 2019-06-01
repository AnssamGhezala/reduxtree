import React, { Component } from "react";
import "./NodeC.css";
import NodeE from "../NodeE/NodeE";

class NodeC extends Component {
  render() {
    return (
      <div className="Tree element">
        <center> C </center>
        <NodeE />
      </div>
    );
  }
}

export default NodeC;
