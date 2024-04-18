// ---------------- React and redux tools imports---------------
import React, { useEffect, useState } from 'react';

// ----------------Components imports-----------------------------------
import NavList from 'components/NavList/NavList';
import { Filter } from 'components/Filter/Filter';
import { CardInfo } from 'components/CardInfo/CardInfo';
import Loader from '../../components/Loader/Loader';

// ----------------Styles import-----------------------------------
import style from './catalog.module.css';

const Catalog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <>
      {loading && <Loader size={80} color="#00BFFF" />}
      {error && (
        <div className={style.Error}>An error occurred: {error.message}</div>
      )}
      <NavList/> 
      <div className={style.catalog_wrapper}>
      <Filter/>
      <CardInfo/>
      </div>
    </>
  );
};

export default Catalog;
