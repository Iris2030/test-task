import React, { useState } from 'react';
import style from "./hero.module.css";
import NavList from 'components/NavList/NavList';
import { useDispatch, useSelector } from 'react-redux';

const Hero = () => {

  return (

 <div className={style.hero}>
  <NavList />
  <img className={style.logo} alt='logo' width="97" height="80" src="https://freeway-camper.com/assets/media/images/icons-and-logos/Camper_logo.webp"/>
  <h1 className={style.hero_text} >Buy your dream campers & RVs</h1>
</div> 
  );
};

export default Hero