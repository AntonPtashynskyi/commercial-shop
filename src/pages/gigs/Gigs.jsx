import React, { useState } from "react";
import { GigCard } from "../../components/gigCard/GigCard";
import "./Gigs.scss";

export const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const handleOpen = () => {
    setOpen(!open);
  };

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">HOMER > GRAPHICS & DESIGN</span>
        <h1>AI Artist</h1>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          unde?
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" name="min" id="" placeholder="min" />
            <input type="text" name="max" id="" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sorted by</span>
            <span className="sort-type">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="/imgs/arrow-d.svg" alt=">" onClick={() => handleOpen()} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {/* {gigs.map(item => <GigCard key={gig.id} item={gig}/>)} */}
          <GigCard />
          <GigCard />
          <GigCard />
          <GigCard />
          <GigCard />
          <GigCard />
          <GigCard />
          <GigCard />
        </div>
      </div>
    </div>
  );
};
