import React from "react";
import style from "./navbar.module.css";
import Logo from "../../assets/shared/desktop/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={style.navContainer}>
        <div className={style.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <ul className={style.navUl}>
          <li className={style.navLi}>
            <NavLink to={"/"}>HOME</NavLink>
          </li>

          <li className={style.navLi}>
            <NavLink to={"/aboutUs"}>ABOUT US</NavLink>
          </li>

          <li className={style.navLi}>
            <NavLink to={"/createYourPlan"}>CREATE YOUR PLAN</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
