import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

export const Messages = () => {
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque ea veniam ut at corporis natus nam aut incidunt minus?";
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Thomas Brush</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>1h ago</td>
            <td>
              <button className="readMsgBtn">Mask as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Thomas Brush</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>2h ago</td>
            <td>
              <button className="readMsgBtn">Mask as read</button>
            </td>
          </tr>
          <tr>
            <td>Thomas Brush</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>1 week ago</td>
          </tr>
          <tr>
            <td>Thomas Brush</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>1 month ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
