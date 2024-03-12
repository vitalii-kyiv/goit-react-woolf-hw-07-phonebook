import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: (state, { payload }) => {
      state = payload;
      return payload;
    },
  },
});

export const filterSliceReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;
