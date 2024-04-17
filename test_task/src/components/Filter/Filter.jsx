import React, { useState } from 'react';
import styles from './filter.module.css';
import van_icon from '../../assets/icons/van.svg';
import fully_integrated_icon from '../../assets/icons/fully_integrated.svg';
import alcove_icon from '../../assets/icons/alcove.svg';
import tv_icon from '../../assets/icons/tv.svg';
import shower_icon from '../../assets/icons/shower.svg';
import kitchen_icon from '../../assets/icons/kitchen.svg';
import transmission_icon from '../../assets/icons/transmission.svg';
import wind_icon from '../../assets/icons/wind.svg';
import location_icon from '../../assets/icons/location.svg';
import location_disabled_icon from '../../assets/icons/location_disabled.svg';

export const Filter = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const camperTypes = [
    { id: 1, name: 'Van', icon: van_icon },
    { id: 2, name: 'Fully Integrated', icon: fully_integrated_icon },
    { id: 3, name: 'Alcove', icon: alcove_icon },
  ];

  const equipment = [
    { id: '1', name: 'AC', icon: wind_icon },
    { id: '2', name: 'Automatic', icon: transmission_icon },
    { id: '3', name: 'Kitchen', icon: kitchen_icon },
    { id: '4', name: 'TV', icon: tv_icon },
    { id: '5', name: 'Shower', icon: shower_icon },
  ];

  return (
    <div className={styles.filter_container}>
      <div className={styles.location_container}>
        <label className={styles.location_label} htmlFor="location_input">
          Location{' '}
        </label>
        <div className={styles.relative_container}>
          <input
            className={styles.location_input}
            type="text"
            id="location_input"
            name="location"
            placeholder="...city name"
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={inputValue}
          />
          <img
            className={styles.location_icon_disabled}
            src={isInputFocused || inputValue ? location_icon : location_disabled_icon}
            alt="equipment_icon"
          />
        </div>
      </div>
      <div>
        <p className={styles.filters_title}>Filters</p>
        <div className={styles.filters_wrapper}>
          <div className={styles.equipment_wrapper}>
            <h2>Vehicle equipment</h2>
            <hr />
            <ul className={styles.equipment_list}>
              {equipment.map(({ id, name, icon }) => (
                <li key={id} className={styles.equipment_list_item}>
                  <img
                    className={styles.equipment_icon}
                    src={icon}
                    alt="equipment_icon"
                  />
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.types_wrapper}>
            <h2>Vehicle type</h2>
            <hr />
            <ul className={styles.types_list}>
              {camperTypes.map(({ id, name, icon }) => (
                <li key={id} className={styles.types_list_item}>
                  <img
                    className={styles.types_icon}
                    src={icon}
                    alt="van icon"
                  />
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button className={styles.search_btn}>Search</button>
    </div>
  );
};
