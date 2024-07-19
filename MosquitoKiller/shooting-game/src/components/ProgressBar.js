import React from "react";

const ProgressBar = ({ value, max }) => {
	return (
	  <div className="progress-bar-container">
		<div className="progress-bar" style={{ width: `${(value / max) * 100}%` }}></div>
	  </div>
	);
  };

export default ProgressBar;
