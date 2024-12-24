import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';




const Header = () => {
const buildLinkClass = ({ isActive }) => {
  return clsx(s.links, isActive && s.activeLink);
};
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
 <div className={s.header}>
  <div className={s.left}>
    <NavLink className={s.headerName} to="/">Home</NavLink>
  </div>
      {!isLoggedIn && (
        <div className={s.center}>
          <p>Hello, plz login or register</p>
        </div>
      )}
      {isLoggedIn && <div className={s.center}>
        <p>Welcome, {user.name}</p>
        </div> }
  <div className={s.right}>
    <li className={s.navContacts}>
      <NavLink className={buildLinkClass} to="/contacts">Contacts</NavLink>
    </li>

    {!isLoggedIn && (
      <ul className={s.navLinks}>
        <li><NavLink className={buildLinkClass} to="/register">Register</NavLink></li>
        <li><NavLink className={buildLinkClass} to="/login">Login</NavLink></li>
      </ul>
    )}
    
    {isLoggedIn && <button className={s.btn}>Logout</button>}
  </div>
</div>
  )
}

export default Header