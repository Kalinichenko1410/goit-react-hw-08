import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.links, isActive && s.activeLink);
};

const AuthNav = () => {
  return (
    <ul className={s.navLinks}>
      <li>
        <NavLink className={buildLinkClass} to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;