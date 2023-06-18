import { useState } from 'react';
import { FormWrapper, Form, AddContact, Button } from './ContactForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone })).then(() => {
      Notify.success(`Contact ${name} was added successfully`);
      setName('');
      setPhone('');
    });
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
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="tel"
            name="phone"
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
