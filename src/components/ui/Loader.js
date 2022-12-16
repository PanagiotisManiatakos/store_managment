import React from "react";

const Loader = () => {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
