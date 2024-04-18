// ---------------- React and redux tools imports---------------
import React, { useEffect } from 'react';

// ----------------Icons import-----------------------------------
import close_icon from "../../assets/icons/close.svg";

// ----------------Styles import-----------------------------------
import styles from './Modal.module.css';


export const Modal = ({ camper, closeModal }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        console.log('here');
        closeModal();
      }
    };
  
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal}>
        <div className={styles.name_wrapper}>
          <h2>{camper.name}</h2>
          <span onClick={closeModal} className={styles.button_close}>
            <img className={styles.close_icon} src={close_icon} alt="persons icon" />
          </span>
        </div>
        <div className={styles.secondary_info}>
          <span> {camper.rating}({camper.reviews.length} Reviews) </span>
          <span>{camper.location}</span>
        </div>
        <h2>€{camper.price.toFixed(2)}</h2>
        <div className={styles.gallery_advert}>
          {camper.gallery.map((photo, index) => (
            <img
              key={index}
              className={styles.photo_advert}
              src={photo}
              alt={camper.name}
              width={290}
              height={310}
            />
          ))}
        </div>
        <p className={styles.description}>{camper.description}</p>
        <nav>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <h2>Features</h2>
            </li>
            <li className={styles.nav_item}>
              <h2>Reviews</h2>
            </li>
          </ul>
        </nav>
        <hr/>
      </div>
    </div>
  );
};
