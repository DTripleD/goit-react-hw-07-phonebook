import {
  Element,
  ErrorText,
  ErrorTitle,
  ErrorWrapper,
  List,
} from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getError, getFilter } from 'redux/selectors';
import Contact from 'components/Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isError = useSelector(getError);

  const getFilteredContact = (contacts, filter) => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filteredContacts = getFilteredContact(contacts, filter);

  return (
    <List>
      {isError ? (
        <ErrorWrapper>
          <ErrorTitle>Opsss... Something went wrong. Try later</ErrorTitle>
          <ErrorText>{isError}</ErrorText>
        </ErrorWrapper>
      ) : (
        filteredContacts.map(contact => (
          <Element key={contact.id}>
            <Contact contact={contact} />
          </Element>
        ))
      )}
    </List>
  );
};

export default ContactList;
