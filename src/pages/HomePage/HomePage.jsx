// ---------------- React and redux tools imports---------------
import React from 'react';

// ----------------Components imports-----------------------------------
import Hero from '../../components/Hero/Hero';
import About from 'components/About/About';
import Footer from 'components/Footer/Footer';

// ----------------Styles import-----------------------------------
import style from './HomePage.module.css';

const HomePage = () => {

  return (
    <>
    <Hero/>
    <div className={style.about_container}>
    <About/>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;
