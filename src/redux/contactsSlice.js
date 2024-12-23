import { createSelector, createSlice, isAnyOf} from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from './filtersSlice';
 const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
   reducers: {
      fetchContactsSuccess: (state, action) => {
       state.items = action.payload;
       state.isLoading = false;
     },
     setIsLoading: (state, action) => {
       state.isLoading = action.payload;
     },
     setError : (state, action) => {
       state.isError = action.payload
       state.isLoading = false;
     },
    deleteContacts: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
   addContacts: (state, action) => {
    state.items.push(action.payload); 
},
   },
   extraReducers: builder => {
     builder
       .addCase(fetchContacts.fulfilled, (state, action) => {
         state.items = action.payload;
       })
       .addCase(deleteContact.fulfilled, (state, action) => {
         state.items = state.items.filter(contact => contact.id !== action.payload);
       })
       .addCase(addContact.fulfilled, (state, action) => {
         state.items.push(action.payload);
       })









       .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending), (state, action) => {
         state.isLoading = true;
       })
       .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled), (state, action) => {
         state.isLoading = false;
       })
       .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), (state, action) => {
         state.isLoading = false;
         state.isError = action.payload;
       });
     
   },
});

export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;  

export const { fetchContactsSuccess, deleteContacts, addContacts, setIsLoading, setError} = contactsSlice.actions;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.isError;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
