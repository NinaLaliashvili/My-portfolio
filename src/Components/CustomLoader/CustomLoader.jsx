import React from "react";
import "./CustomLoader.css";

function CustomLoader() {
  return (
    <div className="custom-loader-container">
      <div className="custom-loader">
        <div className="console-header">Terminal</div>
        <p className="console-text"> Good job, you caught the bug... 🐞</p>
      </div>
    </div>
  );
}

export default CustomLoader;
