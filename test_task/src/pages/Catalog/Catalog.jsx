import React, { useEffect, useState } from 'react';
// import themoviedbApi from '../../helpers/themoviedb-api';
// import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import css from './Catalog.module.css';

const Catalog = () => {
  //   const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchTrendingMovies = async () => {
  //       setLoading(true);

  //       try {
  //         const response = await themoviedbApi.fetchTrendingMovies();
  //         setMovies(response.data.results);
  //       } catch (err) {
  //         setError(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchTrendingMovies();
  //   }, []);

  return (
    <>
      {loading && <Loader size={80} color="#00BFFF" />}
      {error && (
        <div className={css.Error}>An error occurred: {error.message}</div>
      )}
      <h1 className={css.Title}>Catalog</h1>
      {/* <MoviesList movies={movies} /> */}
    </>
  );
};

export default Catalog;
