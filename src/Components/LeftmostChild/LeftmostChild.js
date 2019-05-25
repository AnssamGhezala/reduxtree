import React, { Component } from "react";
import "./LeftmostChild.css";
import { connect } from "react-redux";

class LeftmostChild extends Component {
  state = { value: "" };

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
    onUserInput: value => dispatch({ type: "USER_INPUT", value: value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftmostChild);
