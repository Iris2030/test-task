import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import style from './catalog.module.css';
import Card from '../../components/Card/Card';

const Catalog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      {loading && <Loader size={80} color="#00BFFF" />}
      {error && (
        <div className={style.Error}>An error occurred: {error.message}</div>
      )}
      <Card/>
    </>
  );
};

export default Catalog;
