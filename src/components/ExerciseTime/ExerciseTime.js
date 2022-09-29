import React from "react";
import "./ExerciseTime.css";

const ExerciseTime = ({ time }) => {
  let totalSecond = 0;
  for (const seconds of time) {
    totalSecond = totalSecond + seconds.timerequired;
  }
  return (
    <div>
      <h3>Exercise Details {time.length}</h3>
      <div className="exercise-time">
        <p className="exTime">Exercise Time</p>
        <p>{totalSecond} seconds</p>
      </div>
    </div>
  );
};

export default ExerciseTime;
