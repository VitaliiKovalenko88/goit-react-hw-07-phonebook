import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://658a1a27ba789a962236bf08.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkApi) => {
  try {
    const { data } = await axios.post("/contacts", contact);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})