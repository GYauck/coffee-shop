import React, { useState } from "react";
import style from "./accordion.module.css";

interface Props {
  card: any;
  handleOption: (value: string) => void;
}

const Cards: React.FC<Props> = ({ card, handleOption }) => {
  
  const [activeCard, setActiveCard] = useState<string | null>(null);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const value = event.currentTarget.id;
    if(activeCard === value) {
      handleOption("");
      setActiveCard(null);
    } else {
      handleOption(value);
      setActiveCard(value);
    }
  }

  return (
    <div className={style.cardGrid}>
      <div className={`${style.card} ${ activeCard === card.cardOne.name ? style.activeCard : "" }`} id={card.cardOne.name}onClick={handleClick}>
        <h2 className={style.cardName}>{card.cardOne.name}</h2>
        <p className={style.cardDescription}>{card.cardOne.description}</p>
      </div>

      <div className={`${style.card} ${ activeCard === card.cardTwo.name ? style.activeCard : ""}`}id={card.cardTwo.name}onClick={handleClick}>
        <h2 className={style.cardName}>{card.cardTwo.name}</h2>
        <p className={style.cardDescription}>{card.cardTwo.description}</p>
      </div>

      <div className={`${style.card} ${ activeCard === card.cardThree.name ? style.activeCard : "" }`} id={card.cardThree.name} onClick={handleClick}>
        <h2 className={style.cardName}>{card.cardThree.name}</h2>
        <p className={style.cardDescription}>{card.cardThree.description}</p>
      </div>
    </div>
  );
};

export default Cards;
