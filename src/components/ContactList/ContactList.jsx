import ContactListItem from 'components/ContactListItem/ContactListItemItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ul>
      {getFilteredContacts().map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
