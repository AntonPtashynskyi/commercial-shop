import React from "react";
import "./Add.scss";

export const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add new Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="e. g. I will do something I'm really good at it"
            />
            <label htmlFor="category">Category</label>
            <select name="cats" id="category">
              <option value="design">Design</option>
              <option value="WebDevelopment">Web Development</option>
              <option value="video">Video</option>
              <option value="animation">animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="cover">Cover image</label>
            <input type="file" id="cover" />
            <label htmlFor="upload">upload images</label>
            <input type="multiple" id="upload" />
            <label htmlFor="desc">Description</label>
            <textarea
              name=""
              id="desc"
              cols="30"
              rows="16"
              placeholder="Brief description"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="service">Service title</label>
            <input
              type="text"
              name=""
              id="service"
              placeholder="e.g. One page or web design"
            />
            <label htmlFor="shortDesc">Short description</label>
            <textarea
              name=""
              id="shortDesc"
              cols="30"
              rows="10"
              placeholder="Short description"
            ></textarea>
            <label htmlFor="deliveryTime">Delivery time</label>
            <input type="number" min={1} id="deliveryTime" />
            <label htmlFor="revisionNumber">Revision Number</label>
            <input type="number" min={1} id="revisionNumber" />
            <label htmlFor="features">Add features</label>
            <input type="number" id="features" placeholder="page design" />
            <input type="number" id="features" placeholder="file uploading" />
            <input
              type="number"
              id="features"
              placeholder="setting up a domain"
            />
            <input type="number" id="features" placeholder="hosting" />
            <input type="number" id="features" placeholder="" />
            <label htmlFor="price">Price</label>
            <input type="number" min={1} id="features" />
          </div>
        </div>
      </div>
    </div>
  );
};
