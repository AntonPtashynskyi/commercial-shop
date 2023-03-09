import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

export const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src="./imgs/gog-image.jpg" alt="" />
        <div className="info">
          <div className="user">
            <img src="" alt="" />
            <span>User name</span>
          </div>
          <p className="description"></p>
          <div className="star">
            <img src="" alt="star" />
            <span>STAR</span>
          </div>
        </div>
        <span>Star</span>
      </div>
      <hr />
      <div className="details">
        <img src="" alt="heart" />
        <div className="price">
          <span>Starting at</span>
          <h2>200$</h2>
        </div>
      </div>
    </Link>
  );
};
