import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./navList.module.css";

const NavList = () => {

  return (

  <div className={style.nav_list_wrapper}>
    <nav>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <NavLink to="/" exact="true" className={({ isActive }) => isActive ? style.activeLink : style.link}>
              Home
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? style.activeLink : style.link}>
              Catalog
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? style.activeLink : style.link}>
              Favorites
            </NavLink>
          </li>
        </ul>
    </nav>
  </div> 
  );
};

export default NavList