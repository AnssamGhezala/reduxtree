import React, { Component } from "react";
import "./DisplayNode.css";
import { connect } from "react-redux";

class DisplayNode extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="DisplayNode element">
        <header> You typed: </header>
        <div className="Result"> {this.props.val} </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    val: state.value
  };
};

export default connect(mapStateToProps)(DisplayNode);
