import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import profile from "../../images/profile.png";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <img src={profile} alt="" />
      <div className="profileInfo">
        <h6>Shariful Islam</h6>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Dortmund, Germany</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
