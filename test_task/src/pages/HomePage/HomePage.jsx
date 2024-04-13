import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import Hero from '../../components/Hero/Hero';
import About from 'components/About/About';

const HomePage = () => {
  const navigate = useNavigate();

  const toCatalog = () => {
    navigate('/catalog');
  };

  return (
    <>
    <Hero/>
    <About/>
    </>
  );
};

export default HomePage;
