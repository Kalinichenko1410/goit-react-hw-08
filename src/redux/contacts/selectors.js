import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/slice";



export const selectContacts = (state) => state.contacts.items;


export const selectIsLoading = (state) => state.contacts.isLoading;


export const selectIsError = (state) => state.contacts.isError;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);