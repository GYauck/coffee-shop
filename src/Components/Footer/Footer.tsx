import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <img className={style.logoImg} src={logo} alt="logoCoffee" />
        <div className={style.iconContainer}>
          <img src={facebookIcon} alt="facebookIcon" />
          <img src={instagramIcon} alt="instagramIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
        </div>
      </div>
    </>
  );
};

export default Footer;
