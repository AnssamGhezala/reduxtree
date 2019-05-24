import React, { Component } from "react";
import "./InputNode.css";
import { connect } from "react-redux";

class InputNode extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="InputNode element">
        <header> a1 </header>
        <input
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
)(InputNode);
