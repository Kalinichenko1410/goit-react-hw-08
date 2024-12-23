import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
  return clsx(s.links, isActive && s.activeLink);
};

const Header = () => {
  return (
      <div className={s.header}>
          <NavLink className={s.headerName} to="/">PhoneBook</NavLink>
          <ul className={s.navLinks}>  
            <li className={s.navItems}><NavLink className={buildLinkClass} to="/">registeer</NavLink></li>  
            <li className={s.navItems}><NavLink className={buildLinkClass} to="/">Login</NavLink></li>  
          
          
        </ul>
    </div>
  )
}

export default Header