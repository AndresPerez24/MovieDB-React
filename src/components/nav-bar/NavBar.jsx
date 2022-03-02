import React from "react";
import {ReactComponent as PlayIcon} from '../../assets/icons/play.svg';
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg';
import {ReactComponent as StarIcon} from '../../assets/icons/star-1.svg';
import {ReactComponent as TvIcon} from '../../assets/icons/tv.svg';
import {ReactComponent as MovieIcon} from '../../assets/icons/movie.svg';
import './NavBar.scss'

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <PlayIcon/>
        <HomeIcon className="navbar__icon"/>
        <MovieIcon className="navbar__icon"/>
        <TvIcon className="navbar__icon"/>
        <StarIcon className="navbar__icon"/>
      </div>
    </div>
  );
};

export default NavBar;