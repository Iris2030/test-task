import { configureStore } from '@reduxjs/toolkit';
import advertReducer from './slices';

const store = configureStore({
  reducer: {
    advert: advertReducer,
  },
});

export default store;
