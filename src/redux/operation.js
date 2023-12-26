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
    const { data } = await axios.post("/contacts", contact, {
      headers: {
        "Content-Type": "aplicatoin/json"
      }
    });
    console.log(contact)
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
})