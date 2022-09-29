import React from "react";
import "./ToastButton.css";
import { ToastContainer, toast } from "react-toastify";

const ToastButton = (props) => {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <button onClick={notify} className="activityBtn">
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default ToastButton;
