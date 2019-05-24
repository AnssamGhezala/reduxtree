import React, { Component } from "react";
import "./Tree.css";
import { connect } from "react-redux";

class Tree extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="Tree element">
        <header>{this.props.title}</header>
        <div className="element ElementA Tree">
          <header> Element A </header>
          <div className="element Tree">
            <header> a1 </header>
            <input
              type="text"
              value={this.props.val}
              onChange={e => this.props.onUserInput(e.target.value)}
            />
          </div>
          <div className="element">
            <header> a2 </header>
          </div>
        </div>
        <div className="element ElementB Tree">
          <header> Element B </header>
          <div className="element">
            <header> b1 </header>
          </div>
          <div className="element Tree">
            <header> You typed: </header>
            <div className="Result"> {this.props.val}</div>
          </div>
        </div>
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
