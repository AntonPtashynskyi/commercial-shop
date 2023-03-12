import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

export const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="addBtn">
            Add new gig
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src="/imgs/item.jpg" alt="" />
            </td>
            <td>Gig 1</td>
            <td>59.99 $</td>
            <td>43</td>
            <td>
              <img src="/imgs/delete.svg" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="/imgs/item.jpg" alt="" />
            </td>
            <td>Gig 1</td>
            <td>59.99 $</td>
            <td>43</td>
            <td>
              <img src="/imgs/delete.svg" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="/imgs/item.jpg" alt="" />
            </td>
            <td>Gig 1</td>
            <td>59.99 $</td>
            <td>43</td>
            <td>
              <img src="/imgs/delete.svg" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="/imgs/item.jpg" alt="" />
            </td>
            <td>Gig 1</td>
            <td>59.99 $</td>
            <td>43</td>
            <td>
              <img src="/imgs/delete.svg" alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
