import { useState } from "react";
import Line from "../../Commons/Line/Line";
import style from "./subscribe.module.css";
import data from "../../data.json";
import { Link } from "react-router-dom";
import Accordion from "../../Components/Accordion/Accordion";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Button from "../../Commons/Button/Button";
import ModalSumary from "../../Components/ModalSummary/ModalSumary";

const Subscribe = () => {
  const [howCards] = useState(data.howItWorks);
  const [accordion] = useState(data.accordion)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
     setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  
  return (
    <div className={style.subscribeContainer}>
      <div className={style.firstContainer}>
        <div className={style.firstText}>
          <h1 className={style.firstH1}>Create Plan</h1>
          <p className={style.firstDescription}>
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </p>
        </div>
      </div>
      <div className={style.secondContainer}>
        <div className={style.secondCenter}>
          <Line color="transparent" />
          <div className={style.secondGrid}>
            {howCards.map((card, index) => (
              <div className={style.secondCard} key={index}>
                <div className={style.secondNumber}>{card.number}</div>
                <h1 className={style.secondTitle}>{card.title}</h1>
                <p className={style.secondDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.thirdContainer}>
        <div className={style.planNavbar}>
          <ul className={style.planUl}>
            <li className={style.planLi}>
              <Link to="preferences">
              <span className={style.numberSpan}>01</span> <span className={style.textSpan}>Preferences</span> 
              </Link>
              <hr />
            </li>
            <li className={style.planLi}>
              <Link to="bean">
              <span className={style.numberSpan}>02</span> <span className={style.textSpan}>Bean Type</span>
              </Link>
              <hr />
            </li>
            <li className={style.planLi}>
              <Link to="quantity">
              <span className={style.numberSpan}>03</span> <span className={style.textSpan}>Quantity</span> 
              </Link>
              <hr />
            </li>
            <li className={style.planLi}>
              <Link to="grind">
              <span className={style.numberSpan}>04</span> <span className={style.textSpan}>Grind Option</span>
              </Link>
              <hr />
            </li>
            <li className={style.planLi}>
              <Link to="deliveries">
              <span className={style.numberSpan}>05</span> <span className={style.textSpan}>Deliveries</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.accordionContainer}>
        <Accordion accordion={accordion}/>
        <OrderSummary />
        <Button disabled={true} text="Create my plan!" linkTo="subscribe" onClick={()=>openModal()}/>
        </div>
        {isModalOpen && <ModalSumary closeModal={closeModal}/>}
      </div>
    </div>
  );
};

export default Subscribe;
