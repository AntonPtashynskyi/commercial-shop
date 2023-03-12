import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

export const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src="./imgs/gig-image.jpg" alt="" />
        <div className="info">
          <div className="user">
            <img src="/imgs/avatar.jpg" alt="" className="avatar" />
            <span>User name</span>
          </div>
          <p className="description"></p>
          <div className="star">
            <img src="/imgs/star.svg" alt="star" />
            <span>5</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="/imgs/heart.svg" alt="heart" />
          <div className="price">
            <span>Starting at</span>
            <h2>200$</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};
