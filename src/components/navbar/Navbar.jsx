import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => removeEventListener("scroll", isActive);
  }, []);

  const currentUser = {
    id: 1,
    username: "Tony",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="text">ArtAlley</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <ul className="links-list">
            <li className="links-list__item">
              <a href="" className="link">
                Your Business
              </a>
            </li>
            <li className="links-list__item">
              <a href="" className="link">
                For you
              </a>
            </li>
            <li className="links-list__item">
              <a href="" className="link">
                English
              </a>
            </li>
            <li className="links-list__item">
              <a href="" className="link">
                Sign in
              </a>
            </li>
            {!currentUser.isSeller && (
              <li className="links-list__item">
                <a href="" className="link">
                  Become a Seller
                </a>
              </li>
            )}
          </ul>
          {!currentUser && (
            <a href="#" className="join">
              join
            </a>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen((prev) => !prev)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                alt="user"
              />
              <span className="user__name">{currentUser.username}</span>
              {open && (
                <div className="user__options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new Gigs
                      </Link>
                      <Link className="link" to="/orders">
                        Orders
                      </Link>
                      <Link className="link" to="/messages">
                        Messages
                      </Link>
                      <Link className="link" to="/">
                        Logout
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
      {(active || pathname !== "/") && (
        <div className="menu">
          <Link className="link">Graphics & design</Link>
          <Link className="link">Writing & Translation</Link>
          <Link className="link">AI Services</Link>
          <Link className="link">Digital market</Link>
          <Link className="link">Music& Audio</Link>
        </div>
      )}
    </div>
  );
};
