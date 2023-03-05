import React from "react";
import "./Featured.scss";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Lorem ipsum dolor sit consectetur.</h1>
          <div className="search">
            <div className="search-input">
              <img src="./imgs/search.webp" alt="" />
              <input type="text" placeholder="Try build mobile app" />
              <button type="submit">Search</button>
            </div>
            <div className="popular">
              <span>Popular:</span>
              <button>Web Design</button>
              <button>WordPress</button>
              <button>Logo Design</button>
              <button>AI Services</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="./imgs/header.png" alt="" />
        </div>
      </div>
    </div>
  );
};
