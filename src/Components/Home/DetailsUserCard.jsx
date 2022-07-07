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

// created: "2017-11-04T18:50:21.651Z"
// episode: (51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
// gender: "Male"
// id: 2
// image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
// location: {name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
// name: "Morty Smith"
// origin: {name: 'unknown', url: ''}
// species: "Human"
// status: "Alive"
// type: ""
