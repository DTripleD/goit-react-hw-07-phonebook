import { useState } from 'react';
import { FormWrapper, Form, AddContact, Button } from './ContactForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacsSlice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(` ${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper>
      <Form onSubmit={onFormSubmit}>
        <AddContact>
          Name
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </AddContact>

        <AddContact>
          Number
          <input
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </AddContact>
        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
