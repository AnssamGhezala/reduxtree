import React, { Component } from "react";
import "./TreeB.css";
import DisplayNode from "../DisplayNode/DisplayNode";

class TreeB extends Component {
  render() {
    return (
      <div className="TreeB">
        <div className="element ElementB Tree">
          <header> Element B </header>
          <div className="element">
            <header> b1 </header>
          </div>
          <DisplayNode />
        </div>
      </div>
    );
  }
}

export default TreeB;
