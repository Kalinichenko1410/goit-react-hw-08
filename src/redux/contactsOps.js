import axios from "axios";
import { addContacts, deleteContacts, fetchContactsSuccess, setError, setIsLoading} from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67266302302d03037e6d6520.mockapi.io/";



export const fetchContacts = createAsyncThunk('fetchData', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/contacts");
        return data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});



export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('addContact', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post("/contacts", body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
    









// export const fetchContacts = () => async dispatch => {
//     try {
//     dispatch(setIsLoading(true));
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchContactsSuccess(data));
//     } catch {
//     dispatch(setError(true));
//     }
// };
// export const AddContact = body => async dispatch => {
//     const { data } = await axios.post("/contacts", body);
//     dispatch(addContacts(data)); 
// };
// export const deleteContact = id => async dispatch => {
//     const { data } = await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContacts(data.id));
// };





