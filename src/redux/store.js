import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// const getSavedContacts = () => {
//   return JSON.parse(localStorage.getItem('contact-list'))
//     ? JSON.parse(localStorage.getItem('contact-list'))
//     : [];
// };

export const app_init_state = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  preloadedState: app_init_state,
});
