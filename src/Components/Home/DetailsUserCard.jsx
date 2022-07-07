import React from "react";
import "./Home.css"

export default function DetailsUserCard({ data }) {
  return (
    <div className="user__details__card">
      <div className="user__details__top">
        <div className="user__details__avatar">
                  <img src={ data.image} alt="" className="user__details__img" />
        </div>
        <div className="user__details__name">
          <div className="user__name">{data.name}</div>
          <div className="user__status">
            <div
              className={
                data.status == "Alive" ? "green__circle" : "gray__circle"
              }
            ></div>
            {data.status} - {data.species}
          </div>
        </div>
      </div>
      <div className="user__details__info__group">
        <div className="user__details__info">
          <p className="user__details__info__title">Gender</p>
          <h3 className="user__details__info__content">{data.gender}</h3>
        </div>
        <div className="user__details__info">
          <p className="user__details__info__title">Location</p>
          <h3 className="user__details__info__content">{data.origin.name}</h3>
        </div>
        <div className="user__details__info">
          <p className="user__details__info__title">Species</p>
          <h3 className="user__details__info__content">{data.species}</h3>
        </div>
        <div className="user__details__info">
          <p className="user__details__info__title">Origin</p>
          <h3 className="user__details__info__content">{data.origin.name}</h3>
        </div>
      </div>
    </div>
  );
}
