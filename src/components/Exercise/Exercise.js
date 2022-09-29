import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { addToListHandler, exercise } = props;
  const { title, picture, age, description, timerequired } = exercise;
  return (
    <div className="exercise-container">
      <img src={picture} alt="" />
      <div className="exerciseInfo">
        <h4>Dumble</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <p>
          For Age: <span className="smallInfo">{age}</span>
        </p>
        <p>
          Time required: <span className="smallInfo">{timerequired}s</span>
        </p>
        <button
          onClick={() => addToListHandler(exercise)}
          className="addlistBtn"
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Exercise;
