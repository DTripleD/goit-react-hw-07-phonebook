import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Notify } from 'notiflix';

const Contact = ({ contact: { name, phone, id } }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    Notify.success('Сontact was successfully deleted');
    setIsDeleting(true);
    dispatch(deleteContact(id)).finaly(() => {
      setIsDeleting(false);
    });
  };

  return (
    <>
      <Item>{name}:</Item>
      <Item> {phone}</Item>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
