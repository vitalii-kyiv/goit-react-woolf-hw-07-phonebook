import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contactsSlice/contactsThunk';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
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
