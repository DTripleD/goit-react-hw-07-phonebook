import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper } from './App.styles';

const App = () => (
  <AppWrapper>
    <h2>Phonebook</h2>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </AppWrapper>
);

export default App;
