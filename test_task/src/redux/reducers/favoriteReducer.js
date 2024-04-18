const initialState = {
  favoriteCards: [],
  loading: false,
  error: null,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITE_CARDS':
      return {
        ...state,
        favoriteCards: action.payload,
      };
    case 'ADD_FAVORITE_CARD':
      return {
        ...state,
        favoriteCards: [...state.favoriteCards, action.payload],
      };
    case 'REMOVE_FAVORITE_CARD':
      return {
        ...state,
        favoriteCards: state.favoriteCards.filter(
          camper => camper._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
