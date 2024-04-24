import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCard, setFilteredCampers, startLoading, finishLoading, setCampers } from '../../redux/actions/actions';
import fetchCampers from '../../Api/ApiService';

import styles from './filter.module.css';

// Import icons
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
  const dispatch = useDispatch();
  const campers = useSelector(state => state.favorite.campers);

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [equipmentFilters, setEquipmentFilters] = useState([]);

  useEffect(() => {
    const fetchCampersData = async () => {
      try {
        dispatch(startLoading());
        const campers = await fetchCampers();
        dispatch(setCampers(campers));
      } catch (error) {
        throw new Error(error); 
      } finally {
        dispatch(finishLoading());
      }
    };

    fetchCampersData();
  }, [dispatch]);

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const camperTypes = [
    { id: 1, name: 'Van', icon: van_icon },
    { id: 2, name: 'Fully Integrated', icon: fully_integrated_icon },
    { id: 3, name: 'Alcove', icon: alcove_icon },
  ];

  const equipment = [
    { id: '1', name: 'AC', icon: wind_icon, data: 'airConditioner' },
    { id: '2', name: 'Automatic', icon: transmission_icon, data: 'automatic' },
    { id: '3', name: 'Kitchen', icon: kitchen_icon, data: 'kitchen' },
    { id: '4', name: 'TV', icon: tv_icon, data: 'TV' },
    { id: '5', name: 'Shower', icon: shower_icon, data: 'shower' },
  ];

  const handleEquipmentChange = (name, checked, data) => {
    setEquipmentFilters(prevFilters => {
      if (checked) {
        return [...prevFilters, data];
      } else {
        return prevFilters.filter(filter => filter !== data);
      }
    });
  };

  const filterCampers = () => {
    let filteredResult = campers.slice();

    if (cityFilter) {
      filteredResult = filteredResult.filter(camper => {
        const locationParts = camper.location.split(',');
        return locationParts[1].toLowerCase().trim() === cityFilter.toLowerCase().trim();
      });
    }

    if (equipmentFilters.length > 0) {

      filteredResult = filteredResult.filter(camper => {
        
        return equipmentFilters.every(filter => {
          if (filter === 'automatic') {
            return true;
          } else {
            return camper.details[filter] === 1;
          }
        });
      });
    }

    dispatch(setFilteredCampers(filteredResult)); 
  };

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
            onChange={(e) =>  setCityFilter(e.target.value)}
          />
          <img
            className={styles.location_icon_disabled}
            src={isInputFocused || inputValue ? location_icon : location_disabled_icon}
            alt="location_icon"
          />
        </div>
      </div>
      <div>
        <p className={styles.filters_title}>Filters</p>
        <div className={styles.filters_wrapper}>
          <div className={styles.equipment_wrapper}>
            <h2 className={styles.title}>Vehicle equipment</h2>
            <ul className={styles.equipment_list}>
              {equipment.map(({ id, name, icon, data }) => (
                <li key={id} className={`${styles.equipment_list_item} ${equipmentFilters.includes(data) ? styles.checked : ''}`}>
                  <input
                   className={styles.equipment_input}
                    type="checkbox"
                    id={id}
                    name={name}
                    value={name}
                    onChange={(e) => handleEquipmentChange(name, e.target.checked, data)}
                    checked={equipmentFilters.includes(data)}
                  />
                  <label htmlFor={id}>
                    <img
                      className={styles.equipment_icon}
                      src={icon}
                      alt={`${name}_icon`}
                    />
                    {name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.types_wrapper}>
            <h2 className={styles.title}>Vehicle type</h2>
            <ul className={styles.types_list}>
              {camperTypes.map(({ id, name, icon }) => (
                <li key={id} className={styles.types_list_item}>
                  <img
                    className={styles.types_icon}
                    src={icon}
                    alt={`${name}_icon`}
                  />
                  <p className={styles.types_name}>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button   onClick={filterCampers} className={styles.search_btn}>Search</button>
    </div>
  );
};