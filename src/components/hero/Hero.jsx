import React from "react";
import ReactStars from "react-rating-stars-component";

import "./Hero.scss";

const Hero = ({ data, openModal }) => {

  const {title, vote_average, overview, backdrop_path, movieGenres} = data

  const heroStars = {
    size: 15,
    edit: false,
    activeColor: "#ffffff",
    color: "transparent",
  };

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="container">
          <span className="genre">{movieGenres[0]?.name}</span>
          <ReactStars value={vote_average / 2} {...heroStars} />
          <h1 className="title">{title}</h1>
          <p className="description">{overview}</p>
          <button className="btn" onClick={() => openModal(data)}> Watch now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
