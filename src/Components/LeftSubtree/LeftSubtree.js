import React, { Component } from "react";
import "./LeftSubtree.css";
import LeftmostChild from "../LeftmostChild/LeftmostChild";

class LeftSubtree extends Component {
  render() {
    return (
      <div className="Tree element">
        <center> B</center>
        <LeftmostChild />
      </div>
    );
  }
}

export default LeftSubtree;
