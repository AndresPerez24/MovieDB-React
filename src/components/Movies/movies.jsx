import React, { useState, useMemo } from "react";

import Slider from "react-slick";

import NavBar from "../nav-bar/NavBar";
import Hero from "../hero/Hero";
import Card from "../card/Card";
import FilterBar from "../filter-bar/FilterBar";
import MovieModal from "../movieModal/MovieModal";

import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { API_KEY } from "../../apiKey";

const Movies = ({ genres, movies }) => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <ArrowRight className={className} onClick={onClick} />;
  }

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <ArrowLeft
        className={`hero-arrow-right ${className}`}
        onClick={onClick}
      />
    );
  }

  const [modalInfo, setModalInfo] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(data) {
    setIsOpen(true);
    setModalInfo(data);
  }

  function closeModal() {
    setIsOpen(false);
    setModalInfo(null);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  const settingsHero = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  console.log('movies', movies)
  console.log('genres', genres)

  const moviesWithGenres = useMemo(
    () =>
      movies.map((movie) => {
        return {
          ...movie,
          movieGenres: genres.filter(({ id }) => movie.genre_ids.includes(id)),
        };
      }),
    [movies, genres]
  );

  const heroMovies = moviesWithGenres.slice(0, 3);

  return (
    <div>
      <div className="main-container">
        <NavBar />
        <Slider {...settingsHero}>
          {heroMovies.map((data) => (
            <Hero openModal={openModal} key={data.id} data={data} />
          ))}
        </Slider>

        <div className="login">
          <UserIcon />
          <SettingIcon />
        </div>
      </div>
      <FilterBar />
      <Slider {...settings}>
        {moviesWithGenres.map((data) => (
          <Card key={data.id} data={data} openModal={openModal} />
        ))}
      </Slider>
      {modalInfo && (
        <MovieModal
          apiKey={API_KEY}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          modalInfo={modalInfo}
        />
      )}
    </div>
  );
};

export default Movies;
