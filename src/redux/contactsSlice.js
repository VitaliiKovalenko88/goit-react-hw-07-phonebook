import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./operation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        console.log(action);
      })
    // addContact: (state, action) => {
    //   state.contacts =
    //     [...state.contacts, action.payload]
    // },
    // deleteContact: (state, action) => {
    //   state.contacts =
    //     state.contacts.filter(contact =>
    //       contact.id !== action.payload)
    // },

  }
});

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;