import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'store/filterSlice/filterSlice';
import { selectFilter } from 'store/selector';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(addFilter(evt.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        onChange={changeFilter}
        type="search"
        name="filter"
        value={filter}
      />
    </label>
  );
};

export default Filter;
