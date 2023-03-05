import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

export const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="card">
        <img src={item.img} alt="" />
        <span className="title">{item.name}</span>
        <span className="desc">{item.desc}</span>
      </div>
    </Link>
  );
};
