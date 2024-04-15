import { createSlice } from '@reduxjs/toolkit';
import { app_init_state } from './store';

const {
  filters: { name: initialState },
} = app_init_state;

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterContacts(state, action) {
      state = action.payload;
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
