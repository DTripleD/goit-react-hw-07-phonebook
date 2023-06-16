import { useDispatch, useSelector } from 'react-redux';
import { FilterForm, Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  const updateFilter = event => {
    onSetFilter(event.target.value);
  };

  const filter = useSelector(getFilter);

  return (
    <FilterForm>
      Find contacts by name
      <Input
        type="text"
        onChange={updateFilter}
        value={filter}
        placeholder="Who are we looking for?"
      />
    </FilterForm>
  );
};

export default Filter;
