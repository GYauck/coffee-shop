import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import data from "../../data.json";
import logo from "../../assets/shared/desktop/logo.svg";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";

const Home = () => {
  const [coffees] = useState(data.coffees);
  const [whyCards] = useState(data.whyReasons);
  const [howCards] = useState(data.howItWorks)
  return (
    <div className={style.homeContainer}>
      <div className={style.homeHeader}>
        <div className={style.textContainer}>
          <h1 className={style.textH1}>
            Great coffee
            <br />
            made simple.
          </h1>
          <p className={style.textBody}>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <div className={style.tagContainer}>
            <Link className={style.linkTag} to={"/createYourPlan"}>
              Create your plan
            </Link>
          </div>
        </div>
      </div>
      <div className={style.productsContainer}>
        <div className={style.ourCollection}>our collection</div>
        <div className={style.productsGrid}>
          {coffees.map((coffee, index) => (
            <div key={index} className={style.productCard}>
              <img
                src={coffee.image}
                className={style.coffeeImg}
                alt="coffeeImg"
              />
              <h1 className={style.coffeeName}>{coffee.name}</h1>
              <p className={style.coffeeDescription}>{coffee.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.whyContainer}>
        <h1 className={style.whyH1}>Why choose us?</h1>
        <p className={style.whyP}>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className={style.whyGrid}>
            {whyCards.map((card, index) => (
              <div className={style.whyCard} key={index}>
                <img className={style.whyCardImg} src={card.image} alt="cardImg"/>
                <h1 className={style.whyCardTitle}>{card.title}</h1>
                <p className={style.whyCardDescription}>{card.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className={style.howContainer}>
        <h1 className={style.howH1}>How it works</h1>
        <div className={style.howLineContainer}>
          <div className={style.howLine}>
          </div>
          <div className={style.howCircle}> </div>
          <div className={style.howCircle}> </div>
          <div className={style.howCircle}> </div>
        </div>
        <div className={style.howGrid}>
              {howCards.map((card, index) => (
                <div className={style.howCard} key={index}>
                  <div className={style.howNumber}>{card.number}</div>
                  <h1 className={style.howTitle}>{card.title}</h1>
                  <p className={style.howDescription}>{card.description}</p>
                </div>
              ))}
        </div>
        <div className={style.tagContainer}>
            <Link className={style.linkTag} to={"/createYourPlan"}>
              Create your plan
            </Link>
          </div>
      </div>
      <div className={style.footer}>
                <img className={style.logoImg} src={logo} alt="logoCoffee" />
                <div className={style.iconContainer}>
                  <img src={facebookIcon} alt="facebookIcon" />
                  <img src={instagramIcon} alt="instagramIcon" />
                  <img src={twitterIcon} alt="twitterIcon" />
                </div>
      </div>
    </div>
  );
};

export default Home;
