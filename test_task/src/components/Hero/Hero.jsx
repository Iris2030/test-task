import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./hero.module.css";
import { useDispatch, useSelector } from 'react-redux';

const Hero = () => {

  return (

 <div className={style.hero}>
  <nav>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <NavLink
              to="/"
              exact="true"
              className={({ isActive }) =>
                isActive ? style.activeLink : style.link
              }
            >
              Home
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? style.activeLink : style.link
              }
            >
              Catalog
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? style.activeLink : style.link
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
  <img className={style.logo} alt='logo' width="97" height="80" src="https://freeway-camper.com/assets/media/images/icons-and-logos/Camper_logo.webp"/>
  <h1 className={style.hero_text} >Buy your dream campers & RVs</h1>
</div> 
  );
};

export default Hero