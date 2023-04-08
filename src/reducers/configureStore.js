import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetingSlice from './greetingReducer';

const reducer = combineReducers({
  greetings: greetingSlice,
});

const store = configureStore({
  reducer,
});

export default store;