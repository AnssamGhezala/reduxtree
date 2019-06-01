import React, { Component } from "react";
import "./NodeA.css";
import { connect } from "react-redux";
import NodeB from "../NodeB/NodeB";
import NodeC from "../NodeC/NodeC";

class NodeA extends Component {
  state = {
    value: ""
  };

  onUserInput = newVal => {
    this.setState({ value: newVal });
  };

  render() {
    return (
      <div className="Root element">
        <center> A </center>
        <NodeB />
        <NodeC />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    val: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserInput: value => dispatch({ type: "USER_INPUT", value: value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeA);
