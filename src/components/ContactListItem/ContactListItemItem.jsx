import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li>
      <p>
        {contact.name}:{contact.number}
      </p>
      <button onClick={() => handleDeleteContact(contact.id)}>delete</button>
    </li>
  );
};

export default ContactListItem;
