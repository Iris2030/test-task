// ---------------- React and redux tools imports---------------
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ----------------Components imports-----------------------------------
import NavList from 'components/NavList/NavList';

// ----------------Styles import-----------------------------------
import style from "./hero.module.css";

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