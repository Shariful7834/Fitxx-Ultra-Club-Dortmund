import React, { useEffect, useState } from "react";

import "./MainContainer.css";
import logo from "../../images/Logo.svg";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import PersonInfo from "../Profile/PersonInfo";
import ExerciseTime from "../ExerciseTime/ExerciseTime";
import Breaktime from "../BreakTime/Breaktime";

const MainContainer = () => {
  const [exercises, setExercises] = useState([]);
  const [time, setTimes] = useState([]);
  useEffect(() => {
    fetch("gymdata.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const addToListHandler = (exercise) => {
    console.log(exercise);
    const newTime = [...time, exercise];
    setTimes(newTime);
  };

  return (
    <div className="container">
      <div className="exerciseSection">
        <div className="brandNameWIthLogo">
          <img src={logo} alt="" />
          <h1 className="brandName">FitX-Dortmund-Club</h1>
        </div>
        <div className="selectExercise">
          <h3>Select today's exercise :{exercises.length}</h3>
          <div className="exerciseContainer">
            {exercises.map((exercise) => (
              <Exercise
                exercise={exercise}
                key={exercise.id}
                addToListHandler={addToListHandler}
              ></Exercise>
            ))}
          </div>
        </div>
      </div>
      <div className="exerciseDetails">
        <Profile></Profile>
        <PersonInfo></PersonInfo>
        <div className="addBreak">
          <h3>Add A Break</h3>
          <div className="allBtn">
            <button className="breakBtn">10s</button>
            <button className="breakBtn">20s</button>
            <button className="breakBtn">30s</button>
            <button className="breakBtn">40s</button>
            <button className="breakBtn">50s</button>
          </div>
        </div>
        <ExerciseTime time={time}></ExerciseTime>
        <Breaktime></Breaktime>
        <button className="activityBtn">Activity Completed</button>
      </div>
    </div>
  );
};

export default MainContainer;
