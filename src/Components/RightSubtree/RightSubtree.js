import React, { Component } from "react";
import "./RightSubtree.css";
import RightmostChild from "../RightmostChild/RightmostChild";

class RightSubtree extends Component {
  render() {
    return (
      <div className="Tree element">
        <center> C </center>
        <RightmostChild />
      </div>
    );
  }
}

export default RightSubtree;
