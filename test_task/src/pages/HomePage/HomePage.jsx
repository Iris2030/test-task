import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './HomePage.module.css';
import Hero from '../../components/Hero/Hero';
import About from 'components/About/About';
import Footer from 'components/Footer/Footer';

const HomePage = () => {
  const navigate = useNavigate();

  const toCatalog = () => {
    navigate('/catalog');
  };

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
