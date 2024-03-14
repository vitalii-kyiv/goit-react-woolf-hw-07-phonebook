import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contactsService';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await fetchContactsApi();
    return response;
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await addContactApi(contact);
    return response;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await deleteContactApi(contactId);
    return contactId;
  }
);
