import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import style from './loader.module.css'

const Loader = ({ size, color }) => {
  return (
    <div className={style.loader_wrapper}>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      zcolors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    </div>
  );
};

export default Loader;
