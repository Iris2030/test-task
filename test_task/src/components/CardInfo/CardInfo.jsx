import { useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import styles from './cardInfo.module.css';
import fetchCampers from '../../Api/ApiService';
import heart_icon from "../../assets/icons/heart.svg";
import wind_icon from "../../assets/icons/wind.svg";
import bed_icon from "../../assets/icons/bed.svg";
import kitchen_icon from "../../assets/icons/kitchen.svg";
import fuel_icon from "../../assets/icons/fuel.svg";
import transmission_icon from "../../assets/icons/transmission.svg";
import persons_icon from "../../assets/icons/persons.svg";




export const CardInfo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [campers, setCampers] = useState(null);
  const [modalStates, setModalStates] = useState({});

  useEffect(() => {
    const fetchAllCampers = async () => {
      try {
        setLoading(true);
        const response = await fetchCampers();
        setCampers(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAllCampers();
  }, []);

  const toggleModal = camperId => {
    setModalStates(prevStates => ({
      ...prevStates,
      [camperId]: !prevStates[camperId],
    }));
  };

  const openModal = camperId => {
    setModalStates(prevStates => ({
      ...prevStates,
      [camperId]: true,
    }));
  };

  const closeModal = camperId => {
    setModalStates(prevStates => ({
      ...prevStates,
      [camperId]: false,
    }));
  };


  // console.log(campers);
  return (
    <div className={styles.card_wrapper}>
      {campers &&
        campers.map(camper => (
          <ul key={camper._id} className={styles.card_list_wrapper}>
            <li className={styles.card_info}>
              <div className={styles.card_img_wrapper}>
                <img
                  className={styles.card_img}
                  src={camper.gallery[0]}
                  alt={camper.name}
                  width={290}
                  height={310}
                />
              </div>
              <div>
                <div className={styles.info}>
                  <h2>{camper.name}</h2>
                  <div className={styles.left_info}>
                    <h2>€{camper.price.toFixed(2)}</h2>
                    <img className={styles.like_btn} src={heart_icon} alt="favorite icon" />
                  </div>
                </div>
                <div className={styles.secondary_info}>
                  <span>
                    {camper.rating}({camper.reviews.length} Reviews)
                  </span>
                  <span>{camper.location}</span>
                </div>
                <p className={styles.description}>{camper.description}...</p>
                <ul className={styles.list_details}>
                  <li className={styles.item_details}>
                  <img className={styles.icons} src={persons_icon} alt="persons icon" />
                    <p className={styles.header_detail}>
                      {camper.adults} adults
                    </p>
                  </li>
                  <li className={styles.item_details}>
                    <img className={styles.icons} src={transmission_icon} alt="persons icon" />
                    <p className={styles.header_detail}>
                      {camper.transmission}
                    </p>
                  </li>
                  <li className={styles.item_details}>
                    <img className={styles.icons} src={fuel_icon} alt="persons icon" />
                    <p className={styles.header_detail}>{camper.engine}</p>
                  </li>
                  <li className={styles.item_details}>
                    <img className={styles.icons} src={kitchen_icon} alt="persons icon" />
                    <p className={styles.header_detail}>
                      {camper.details.kitchen && 'Kitchen'}
                    </p>
                  </li>
                  <li className={styles.item_details}>
                    <img className={styles.icons} src={bed_icon} alt="persons icon" />
                    <p className={styles.header_detail}>
                      {camper.details.beds + ' beds'}
                    </p>
                  </li>
                  <li className={styles.item_details}>
                    <img className={styles.icons} src={wind_icon} alt="persons icon" />
                    <p className={styles.header_detail}>
                      {camper.details.airConditioner > 0 && 'AC'}
                    </p>
                  </li>
                </ul>

                <button
                  className={styles.show_btn}
                  onClick={() => openModal(camper._id)}
                >
                  Show more
                </button>
              </div>
              {modalStates[camper._id] && (
                <Modal
                  camper={camper}
                  closeModal={() => closeModal(camper._id)}
                />
              )}
            </li>
          </ul>
        ))}
    </div>
  );
};
