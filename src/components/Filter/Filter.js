import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onSearchInput = e => {
    const inputValue = e.currentTarget.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onSearchInput}
        placeholder="Search here"
      />
    </div>
  );
};
