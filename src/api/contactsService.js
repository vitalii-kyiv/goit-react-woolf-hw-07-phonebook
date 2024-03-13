import axios from 'axios';

axios.defaults.baseURL = 'https://65f019ecda8c6584131ac47d.mockapi.io/api/v1/';

export const fetchContactsApi = async () => {
  const data = await axios('contacts');
  return data.data;
};

export const addContactApi = async contactData => {
  const response = await axios('contacts', {
    method: 'post',
    data: contactData,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const deleteContactApi = async id => {
  const response = await axios(`contacts/${id}`, {
    method: 'delete',
  });
  return response;
};
