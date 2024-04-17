import axios from 'axios';

axios.defaults.baseURL = 'https://661b793965444945d04f8dcc.mockapi.io/v1';

export const FETCH_ADVERT_REQUEST = 'FETCH_ADVERT_REQUEST';
export const FETCH_ADVERT_SUCCESS = 'FETCH_ADVERT_SUCCESS';
export const FETCH_ADVERT_FAILURE = 'FETCH_ADVERT_FAILURE';

export const fetchAdvertRequest = () => {
  return {
    type: FETCH_ADVERT_REQUEST,
  };
};

export const fetchAdvertSuccess = advert => {
  return {
    type: FETCH_ADVERT_SUCCESS,
    payload: advert,
  };
};

export const fetchAdvertFailure = error => {
  return {
    type: FETCH_ADVERT_FAILURE,
    payload: error,
  };
};

export const fetchAdvert = () => {
  return async dispatch => {
    dispatch(fetchAdvertRequest());
    try {
      const response = await axios.get(`/advert`);
      dispatch(fetchAdvertSuccess(response.data));
    } catch (error) {
      dispatch(fetchAdvertFailure(error));
    }
  };
};
