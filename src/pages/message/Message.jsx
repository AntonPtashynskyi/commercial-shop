import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

export const Message = () => {
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis   similique maiores corrupti consectetur inventore facere deleniti   perferendis dolorem ex harum.";
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link>> John Doe
        </span>
        <hr />
        <div className="messages">
          <div className="item">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item owner">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item owner">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item owner">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item owner">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
          <div className="item owner">
            <img src="/imgs/avatar.jpg" alt="" />
            <p>{message}</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write a message"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
