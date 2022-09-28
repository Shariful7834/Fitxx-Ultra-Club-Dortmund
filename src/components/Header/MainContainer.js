import React, { useEffect, useState } from "react";

import "./MainContainer.css";
import logo from "../../images/Logo.svg";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import PersonInfo from "../Profile/PersonInfo";

const MainContainer = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("gymdata.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

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
              <Exercise exercise={exercise}></Exercise>
            ))}
          </div>
        </div>
      </div>
      <div className="exerciseDetails">
        <Profile></Profile>
        <PersonInfo></PersonInfo>
        <h1>exercises details</h1>
      </div>
    </div>
  );
};

export default MainContainer;
