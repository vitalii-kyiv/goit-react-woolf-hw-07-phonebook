import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contactsService';

// fetchContactsApi();
// console.log('fetchContactsApi()', fetchContactsApi());

// const fetchContacts = async () => {
//   try {
//     const data = await fetchContactsApi();
//     console.log('data', data);
//   } catch (error) {
//     console.log('error', error);
//   }
// };
// const contactData = {
//   name: 'John Doe',
//   number: '123-456-7890',
// };

// const addContact = async contactData => {
//   try {
//     const data = await addContactApi(contactData);
//     console.log('data', data);
//   } catch (error) {
//     console.log('error', error);
//   }
// };
// const deleteContact = async id => {
//   try {
//     const data = await deleteContactApi(id);
//     console.log('data', data);
//   } catch (error) {
//     console.log('error', error);
//   }
// };
// deleteContact(13);
// addContact(contactData);
// fetchContacts();
const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        paddingLeft: '40px',
        justifyContent: 'left',
        alignItems: 'left',
        fontSize: 24,
        color: '#010101',
        border: '1px solid black',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
