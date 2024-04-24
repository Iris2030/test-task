import {REMOVE_FAVORITE_CARD,ADD_FAVORITE_CARD,SET_FAVORITE_CARDS, START_LOADING, FINISH_LOADING, SET_CAMPERS, SET_FILTERED_CAMPERS } from '../actions/actionTypes';

const initialState = {
  favoriteCards: [],
  campers: [],
  filteredCampers: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_CARDS:
      return {
        ...state,
        favoriteCards: action.payload,
      };
    case ADD_FAVORITE_CARD:
      return {
        ...state,
        favoriteCards: [...state.favoriteCards, action.payload],
      };
    case REMOVE_FAVORITE_CARD:
      return {
        ...state,
        favoriteCards: state.favoriteCards.filter(
          camper => camper._id !== action.payload
        ),
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_CAMPERS:
      return {
        ...state,
        campers: action.payload,
        filteredCampers: action.payload
      };
    case SET_FILTERED_CAMPERS:
      return {
        ...state,
        filteredCampers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;