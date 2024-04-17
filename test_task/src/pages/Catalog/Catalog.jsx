import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import style from './catalog.module.css';
import { CardInfo } from 'components/CardInfo/CardInfo';
import NavList from 'components/NavList/NavList';
import { Filter } from 'components/Filter/Filter';

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
