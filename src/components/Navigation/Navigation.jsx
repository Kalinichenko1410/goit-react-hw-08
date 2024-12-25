import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Navigation = () => {
    const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.header}>
      <NavLink className={s.headerName} to="/">
        Home
          </NavLink>
            {!isLoggedIn && (
        <div className={s.center}>
                  <p className={s.welcome}>Hello, plz login or register</p>
        </div>
      )}
      {isLoggedIn && <div className={s.center}>
        <p className={s.welcome}>Welcome, {user.name}</p>
        </div> }
    </div>
  );
};

export default Navigation;