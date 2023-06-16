import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacsSlice';
import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Item>{name}:</Item>
      <Item> {number}</Item>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
