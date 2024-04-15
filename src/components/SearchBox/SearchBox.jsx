import { useDispatch, useSelector } from 'react-redux';
import { getFiltersValue } from '../../redux/filter/selectors';
import { filterContacts } from '../../redux/filtersSlice';
import css from '../SearchBox/SearchBox.module.css';

const SearchBox = () => {
  const filterValue = useSelector(getFiltersValue);
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(filterContacts(e.target.value));

  return (
    <div className={css.searchContainer}>
      <p className={css.searchTitle}>Find contacts by name:</p>
      <input
        className={css.searchInput}
        type="text"
        value={filterValue}
        onChange={handleChange}></input>
    </div>
  );
};
export default SearchBox;
