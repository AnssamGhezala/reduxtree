import React, { Component } from "react";
import "./NodeD.css";
import { connect } from "react-redux";

class NodeD extends Component {
  render() {
    return (
      <div className="Child element">
        <center> D </center>
        <textarea
          type="text"
          value={this.props.val}
          onChange={e => this.props.onUserInput(e.target.value)}
        />
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
    onUserInput: inputValue =>
      dispatch({ type: "USER_INPUT", inputValue: inputValue })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeD);
