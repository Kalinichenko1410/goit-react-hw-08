import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';

import { selectNameFilter } from '../../redux/filter/selectors';
import { changeSearch } from '../../redux/filter/slice';

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