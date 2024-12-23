import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchStr: '',
  },
  reducers: {
    changeSearch: (state, action) => {
      state.searchStr = action.payload;
    }
  },
});



export const filtersReducer = filtersSlice.reducer;
export const { changeSearch } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.searchStr;
