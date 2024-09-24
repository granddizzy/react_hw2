import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './usersSlice1';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
});

export default store;