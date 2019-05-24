import React, { Component } from "react";
import "./Tree.css";
import { connect } from "react-redux";
import TreeA from "../TreeA/TreeA";
import TreeB from "../TreeB/TreeB";

class Tree extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="Tree element">
        <header>{this.props.title}</header>
        <TreeA />
        <TreeB />
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
)(Tree);
