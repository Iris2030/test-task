// ---------------- React and redux tools imports---------------
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ----------------Components imports-----------------------------------
import NavList from 'components/NavList/NavList';
import { Filter } from 'components/Filter/Filter';
import { CardInfo } from 'components/CardInfo/CardInfo';
import Loader from '../../components/Loader/Loader';

// ----------------Styles import-----------------------------------
import style from './catalog.module.css';

const Catalog = () => {
  const [loading, setLoading] = useState(true);

  // const loading = useSelector(state => state.favorite.loading);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 800);
  }, []);

  
  return (
    <div>
      <NavList/> 
      {loading ? (
        <Loader />
      ) : (
      <div className={style.catalog_wrapper}>
      <Filter/>
      <CardInfo/>
      </div>
    )}
    </div>
  );
};
  

export default Catalog;
