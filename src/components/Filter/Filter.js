import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e => {
          dispatch(changeFilter(e.currentTarget.value));
        }}
        placeholder="Search here"
      />
    </div>
  );
};
