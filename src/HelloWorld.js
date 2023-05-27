import React, { Fragment, useState } from "react";
import "./HelloWorld.css";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true);
  const toggleTrue = () => {
    if (isTrue) {
        setIsTrue(false);
        return;
    }
     setIsTrue(true);
  }
  return (
    <Fragment>
      <hr></hr>
      <h1 className="h1-green">{props.msg}</h1>
      <hr></hr>
      {isTrue && (
        <Fragment>
          <p>The current value of isTrue is True</p>
          <hr></hr>
        </Fragment>
      )}
      <hr></hr>
      <hr></hr>
      {isTrue
         ? <p>isTrue is True</p>
         : <p>isTrue is False</p>
      }
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}> Toggle isTrue</a>
    </Fragment>
  );
}

export default HelloWorld;
