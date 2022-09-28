import React from "react";
import "./Profile.css";

const PersonInfo = () => {
  return (
    <div>
      <div className="personDetails">
        <div>
          <span>75</span>
          <small>kg</small>
          <p>Weight</p>
        </div>
        <div>
          <span>6.5</span>
          <p>Height</p>
        </div>
        <div>
          <span>25</span>
          <small>yrs</small>
          <p>Weight</p>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
