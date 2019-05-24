import React, { Component } from "react";
import "./TreeA.css";
import InputNode from "../InputNode/InputNode";

class TreeA extends Component {
  render() {
    return (
      <div className="TreeA">
        <div className="element ElementA Tree">
          <header> Element A </header>
          <InputNode />
          <div className="element">
            <header> a2 </header>
          </div>
        </div>
      </div>
    );
  }
}

export default TreeA;
