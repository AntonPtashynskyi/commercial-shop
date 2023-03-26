import React, { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import { GigCard } from "../../components/gigCard/GigCard";
import "./Gigs.scss";
import { newRequest } from "../../utils/newRequest";

export const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("price");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const {
    isLoading,
    error,
    data: gigs,
    refetch,
  } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `api/gigs?${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => res.data),
  });

  const apply = () => {
    refetch();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

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
            <input type="number" ref={minRef} id="" placeholder="min" />
            <input type="number" ref={maxRef} id="" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sorted by</span>
            <span className="sort-type">
              {sort === "price" ? "Price" : "Newest"}
            </span>
            <img src="/imgs/arrow-d.svg" alt=">" onClick={() => handleOpen()} />
            {open && (
              <div className="rightMenu">
                {sort === "price" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("price")}>Price</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading"
            : error
            ? "Something wend wrong!"
            : gigs?.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};
