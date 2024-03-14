import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/selector';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <ContactList />
      </div>
    </div>
  );
};

export default App;
