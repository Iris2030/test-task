import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import css from './Favorites.module.css';

const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      {loading && <Loader size={80} color="#00BFFF" />}
      {error && (
        <div className={css.Error}>An error occurred: {error.message}</div>
      )}
      <h1 className={css.Title}>Favorites</h1>
    </>
  );
};

export default Favorites;
