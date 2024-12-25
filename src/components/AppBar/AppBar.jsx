import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.header}>
      <div className={s.left}>
        <Navigation />
      </div>
      <div className={s.right}>
        {!isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserMenu />}
      </div>
    </div>
  );
};

export default AppBar;