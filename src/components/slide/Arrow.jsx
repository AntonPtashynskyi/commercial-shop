import React from "react";

export const Arrow = ({ direction }) => {
  return (
    <div className="arrow-wrapper">
      <img
        className={`arrow ${direction}`}
        src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        alt=""
      />
    </div>
  );
};
