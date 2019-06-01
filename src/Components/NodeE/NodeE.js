import React, { Component } from "react";
import "./NodeE.css";
import { connect } from "react-redux";

class NodeE extends Component {
  render() {
    return (
      <div className="Child element">
        <center> E </center>
        {this.props.val}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    val: state.inputValue
  };
};

export default connect(mapStateToProps)(NodeE);
