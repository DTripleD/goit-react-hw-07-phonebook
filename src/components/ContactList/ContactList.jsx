import { Element, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Contact from 'components/Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContact = (contacts, filter) => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filteredContacts = getFilteredContact(contacts, filter);

  return (
    <List>
      {filteredContacts.map(contact => (
        <Element key={contact.id}>
          <Contact contact={contact} />
        </Element>
      ))}
    </List>
  );
};

export default ContactList;
