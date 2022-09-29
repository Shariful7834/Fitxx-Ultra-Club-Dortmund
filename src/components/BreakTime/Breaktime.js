import React, { useState } from "react";
import "./Breaktime.css";

const Breaktime = (props) => {
  return (
    <div className="breaktime">
      <p className="breaktimeP">Break time</p>
      <p> {props.breakTimes} seconds</p>
    </div>
  );
};

export default Breaktime;
