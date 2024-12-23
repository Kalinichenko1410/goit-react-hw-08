import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeSearch, selectNameFilter } from '../../redux/filtersSlice'; 

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter); 

  return (
    <div className={s.searchContainer}>
      <p>Find contacts by name</p>
      <input
        className={s.searchField}
        type="text"
        value={value} 
        onChange={e => dispatch(changeSearch(e.target.value))} 
      />
    </div>
  );
};

export default SearchBox;