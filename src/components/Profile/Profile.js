import React from "react";

import profile from "../../images/profile.png";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <img src={profile} alt="" />
      <div className="profileInfo">
        <h6>Shariful Islam</h6>
        <p>
          <span>Dortmund, Germany</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
