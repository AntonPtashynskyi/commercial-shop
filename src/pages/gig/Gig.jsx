import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useLazyQuery } from "@apollo/client";
import { newRequest } from "../../utils/newRequest";
import "./Gig.scss";

export const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`api/gigs/single/${id}`).then((res) => res.data),
  });

  const {
    isLoading: isLoadingUser,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`api/users/${data?.userId}`).then((res) => {
        console.log(res.data);
        return res.data;
      }),
    enabled: !!data,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "Loading ..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <div className="bradCrumbs">
              Fiver {">"} Graphics & design {">"}
            </div>
            <h1>{data?.title}</h1>
            {/* {isLoadingUser ? (
              "Loading ..."
            ) : userError ? (
              "Something went wrong"
            ) : (
              <div className="user">
                <img src={userData?.image || "/imgs/avatar.jpg"} alt="avatar" />
                <span className="name">{userData?.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((image, index) => (
                        <img src="/imgs/star.svg" alt="" key={index} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )} */}
            <div className="slider">
              SLIDER
              {data?.images.map((image) => (
                <img src={image} alt="" key={image} />
              ))}
            </div>
            <h2 className="about-title">Lorem, ipsum dolor.</h2>
            <p className="about-desc">{data?.desc}</p>
            {/* {isLoadingUser ? (
              "Loading ..."
            ) : userError ? (
              "Something went wrong"
            ) : (
              <div className="seller">
                <h2>About User</h2>
                <div className="user">
                  <div className="box-info">
                    <img
                      src={userData?.image || "/imgs/avatar.jpg"}
                      alt=""
                      className="avatar"
                    />
                    <div className="info">
                      <span>Name Name</span>
                      {!isNaN(data.totalStars / data.starNumber) && (
                        <div className="stars">
                          {Array(Math.round(data.totalStars / data.starNumber))
                            .fill()
                            .map((image, index) => (
                              <img src="/imgs/star.svg" alt="" key={index} />
                            ))}
                          <span>
                            {Math.round(data.totalStars / data.starNumber)}
                          </span>
                        </div>
                      )}
                      <button>Contact me</button>
                    </div>
                  </div>
                  <div className="box">
                    <div className="items">
                      <div className="item">
                        <span className="title">From</span>
                        <span className="description">{userData.country}</span>
                      </div>
                      <div className="item">
                        <span className="title">Member since</span>
                        <span className="description">Aug 2022</span>
                      </div>
                      <div className="item">
                        <span className="title">Avr. response time</span>
                        <span className="description">2 hours</span>
                      </div>
                      <div className="item">
                        <span className="title">Last delivery</span>
                        <span className="description">1 dey ago</span>
                      </div>
                      <div className="item">
                        <span className="title">Language</span>
                        <span className="description">English</span>
                      </div>
                    </div>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequatur neque reprehenderit distinctio id error quia
                      consectetur cupiditate vel nobis perspiciatis!
                    </p>
                  </div>
                </div>
              </div>
            )} */}
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img src="/imgs/avatar.jpg" alt="avatar" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="/imgs/usa-flag.png" alt="flag" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((image, index) => (
                        <img src="/imgs/star.svg" alt="" key={index} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto, odit unde. Commodi nisi eos nobis voluptatum
                  beatae. Rem fugit maxime vitae nihil aliquid enim, tenetur
                  voluptatibus repudiandae ad, accusamus nisi architecto
                  reiciendis vel, ratione molestiae? Tenetur quia deserunt odio
                  magni.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/imgs/like.svg" alt="like" />
                  <span>Yes</span>
                  <img src="/imgs/dislike.svg" alt="dislike" />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img src="/imgs/avatar.jpg" alt="avatar" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="/imgs/usa-flag.png" alt="flag" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((image, index) => (
                        <img src="/imgs/star.svg" alt="" key={index} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto, odit unde. Commodi nisi eos nobis voluptatum
                  beatae. Rem fugit maxime vitae nihil aliquid enim, tenetur
                  voluptatibus repudiandae ad, accusamus nisi architecto
                  reiciendis vel, ratione molestiae? Tenetur quia deserunt odio
                  magni.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/imgs/like.svg" alt="like" />
                  <span>Yes</span>
                  <img src="/imgs/dislike.svg" alt="dislike" />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img src="/imgs/avatar.jpg" alt="avatar" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="/imgs/usa-flag.png" alt="flag" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((image, index) => (
                        <img src="/imgs/star.svg" alt="" key={index} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto, odit unde. Commodi nisi eos nobis voluptatum
                  beatae. Rem fugit maxime vitae nihil aliquid enim, tenetur
                  voluptatibus repudiandae ad, accusamus nisi architecto
                  reiciendis vel, ratione molestiae? Tenetur quia deserunt odio
                  magni.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/imgs/like.svg" alt="like" />
                  <span>Yes</span>
                  <img src="/imgs/dislike.svg" alt="dislike" />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <div className="title">
                <p>{data?.shortTitle}</p>
                <span className="price">$ {data?.price} </span>
              </div>
              <p className="desc">{data?.shortDesc}</p>
              <div className="details">
                <div className="time">
                  <img src="/imgs/time.svg" alt="" />
                  <span>{data?.deliveryTime} Days Delivery </span>
                </div>
                <div className="revision">
                  <img src="/imgs/reload.svg" alt="" />
                  <span> {data?.revisionNumber} Revisions </span>
                </div>
              </div>
              <div className="features">
                {data?.features.map((feat) => {
                  return (
                    <div className="item" key={feat}>
                      <img src="/imgs/check-alt.svg" alt="" />
                      <span>{feat}</span>
                    </div>
                  );
                })}
              </div>
              <button>Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
