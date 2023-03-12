import React from "react";
import "./Order.scss";

export const Orders = () => {
  const currentUser = {
    id: 1,
    userName: "John Doe",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {currentUser?.isSeller ? <th>Buyer</th> : <th>Seller</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src="/imgs/item.jpg" alt="" />
            </td>
            <td>Gig 1</td>
            <td>59.99 $</td>
            <td>43</td>
            <td>
              <img src="/imgs/envelope.svg" alt="" className="envelope" />
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
              <img src="/imgs/envelope.svg" alt="" className="envelope" />
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
              <img src="/imgs/envelope.svg" alt="" className="envelope" />
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
              <img src="/imgs/envelope.svg" alt="" className="envelope" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
