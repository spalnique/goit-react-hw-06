import { createSlice, nanoid } from '@reduxjs/toolkit';
import { app_init_state } from './store';

const {
  contacts: { items: initialState },
} = app_init_state;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ username, phone }) {
        return {
          payload: { id: nanoid(), username, phone },
        };
      },
    },
    deleteContact(state, action) {
      return state.reduce(
        (acc, contact) => contact.id !== action.payload && acc.push(contact),
        []
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
