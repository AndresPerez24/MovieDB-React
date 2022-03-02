import React from "react";
import ReactStars from "react-rating-stars-component";

import "./card.scss";

const Card = ({data, openModal}) => {

  const {title, poster_path, vote_average, movieGenres} = data

  const cardStars = {
    size: 15,
    edit: false,
    activeColor: "#ffffff",
    color: "transparent",
  };


  return (
    <div>
      <div
        className="card-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
        }}
      >
        <span className="genre">{movieGenres[0]?.name}</span>
        <ReactStars value={vote_average/2} {...cardStars}/>
        <h2 className="card-title">{title}</h2>
        <span className="watch-now" onClick={() => openModal(data)}>Watch now</span>
      </div>
    </div>
  );
};

export default Card;
