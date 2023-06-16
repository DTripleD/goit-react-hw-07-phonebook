import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { getIsLoading } from 'redux/selectors';
import { useState } from 'react';

const Contact = ({ contact: { name, phone, id } }) => {
  const [deleteId, setDeleteId] = useState(null);
  const [canDelete, setCanDelete] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const isLoading = useSelector(getIsLoading);

  console.log(isLoading);

  if (id === deleteId) {
  }

  return (
    <>
      <Item>{name}:</Item>
      <Item> {phone}</Item>
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
          setDeleteId(id);
        }}
        disabled={isLoading}
      >
        {isLoading && canDelete ? 'Deleting...' : 'Delete'}
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
