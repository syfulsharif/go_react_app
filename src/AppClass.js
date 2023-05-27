import React, { Component } from "react";
import "./AppClass.css";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({
        isTrue: false,
      });
      return;
    }

    this.setState({
      isTrue: true,
    });
  };
  render() {
    return (
      <>
        <hr></hr>
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr></hr>
        {this.state.isTrue && (
          <>
            <p>The current value of isTrue is True</p>
            <hr></hr>
          </>
        )}
        <hr></hr>
        <hr></hr>
        {this.state.isTrue ? <p>isTrue is True</p> : <p>isTrue is False</p>}
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          {" "}
          Toggle isTrue
        </a>
      </>
    );
  }
}
