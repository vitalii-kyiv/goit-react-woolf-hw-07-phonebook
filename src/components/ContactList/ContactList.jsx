import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'store/contactsSlice/contactsThunk';
import { selectContacts, selectFilter } from 'store/selector';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  console.log('contacts', contacts)
  const filter = useSelector(selectFilter);

  useEffect(()=>{
    dispatch(fetchContactsThunk())
  },[dispatch])

  

 const getFilteredContacts = (contacts) => {
  console.log('filtred contacts', contacts)
  if (!contacts || contacts.length === 0) {
    return [];
  }
  return contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );
};
  return (
    <ul>
      {getFilteredContacts(contacts).map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
