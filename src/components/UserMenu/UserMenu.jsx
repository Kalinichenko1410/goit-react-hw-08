import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import clsx from "clsx";
import s from "./UserMenu.module.css";


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <ul className={s.navLinks}>
        <li className={s.navContacts}>
          <NavLink className={s.contLink} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
      <button onClick={() => dispatch(logout())} className={s.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;