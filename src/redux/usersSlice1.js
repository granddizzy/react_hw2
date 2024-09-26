import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// Обычный thunk для асинхронного запроса пользователей
export const fetchUsers = (url) => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`Ошибка: ${response.statusText}`)
    }
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} = usersSlice.actions;

export default usersSlice.reducer;