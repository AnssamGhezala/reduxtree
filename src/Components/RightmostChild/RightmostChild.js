import React, { Component } from "react";
import "./RightmostChild.css";
import { connect } from "react-redux";

class RightmostChild extends Component {
  state = { value: "" };

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
    val: state.value
  };
};

export default connect(mapStateToProps)(RightmostChild);
