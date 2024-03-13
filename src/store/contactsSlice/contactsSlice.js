import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from './contactsThunk';



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  // reducers: {
  //   addContact: (state, { payload }) => {
  //     state.items.push(payload);
  //   },
  //   deleteContact: (state, { payload }) => {
  //     state.items = state.items.filter(contact => contact.id !== payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchContactsThunk.rejected, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addContactThunk.rejected, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload);
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteContactThunk.rejected, state => {
        state.isLoading = true;
        state.error = '';
      });
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
export const { deleteContact } = contactsSlice.actions;
