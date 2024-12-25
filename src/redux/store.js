import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filter/slice";
import { authSlice } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authSlice,
  },
});