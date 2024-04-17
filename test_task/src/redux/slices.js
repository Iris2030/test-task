import {
  FETCH_ADVERT_REQUEST,
  FETCH_ADVERT_SUCCESS,
  FETCH_ADVERT_FAILURE,
} from './operations';

const initialState = {
  loading: false,
  advert: [],
  error: '',
};

const advertReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVERT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADVERT_SUCCESS:
      return {
        loading: false,
        advert: action.payload,
        error: '',
      };
    case FETCH_ADVERT_FAILURE:
      return {
        loading: false,
        advert: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default advertReducer;
