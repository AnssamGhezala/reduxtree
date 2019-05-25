import React, { Component } from "react";
import "./MainTree.css";
import { connect } from "react-redux";
import LeftSubtree from "../LeftSubtree/LeftSubtree";
import RightSubtree from "../RightSubtree/RightSubtree";

class MainTree extends Component {
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
        <LeftSubtree />
        <RightSubtree />
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
)(MainTree);
