import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContacts: (state, action) => {
      state.push(action.payload);
    },
    deleteContacts: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
