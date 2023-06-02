import { useState } from "react";
import { useContext } from "react";
import { CardContext } from "../../Context/cardContext";
import style from "./accordion.module.css"
import navIcon from "../../assets/plan/desktop/icon-arrow.svg"
import Cards from "./Cards";


interface AccordionProps {
  accordion: {
    title: string;
    cardOne: {
      name: string;
      description: string;
    };
    cardTwo: {
      name: string;
      description: string;
    };
    cardThree: {
      name: string;
      description: string;
    };
  }[];
}

interface AccordionState {
    activeIndices: number[];
  }

  const Accordion = ({ accordion }: AccordionProps) => {
    const [state, setState] = useState<AccordionState>({
      activeIndices: [],
    });
    
    const {coffeeMethod, setCoffeeMethod, setCoffeeType, setAmount, setGrindType, setDelivery } = useContext(CardContext) as any
    
    const handleOption1 = (value: string) => {
      setCoffeeMethod(value)
    }
    const handleOption2 = (value: string) => {
      setCoffeeType(value)
    }
    const handleOption3 = (value: string) => {
      setAmount(value)
    }
    const handleOption4 = (value: string) => {
      setGrindType(value)
    }
    const handleOption5 = (value: string) => {
      setDelivery(value)
    }

    const handleClick = (index: number) => {
        if (state.activeIndices.includes(index)) {
          setState({
            ...state,
            activeIndices: state.activeIndices.filter((i) => i !== index),
          });
        } else {
          setState({
            ...state,
            activeIndices: [...state.activeIndices, index],
          });
        }
      };
      
  return (

    <div className={style.accordionMenu}>
      {accordion.map((card, index) => (
        <div key={index}>
            <div onClick={() => {if(!(coffeeMethod === "Capsule" && card.title === "Want us to grind them?")){handleClick(index)} }} className={style.accordionTitle}>
            <div className={`${coffeeMethod === "Capsule" && card.title === "Want us to grind them?"? style.accordionH1Disabled : style.accordionH1 }`}>{card.title}</div>
          <img src={navIcon} className={`${state.activeIndices.includes(index) ? style.logoRotate : ""}`}  id={index.toString()} alt="navIcon" />
            </div>
            {state.activeIndices.includes(index) && (
            <div className={`${style.cardContainer} ${style.cardActive}`}>
              {(index === 0)&& <Cards card={card} handleOption={handleOption1}  />}
              {(index === 1)&& <Cards card={card} handleOption={handleOption2}  />}
              {(index === 2)&& <Cards card={card} handleOption={handleOption3}  />}
              {(index === 3)&& <Cards card={card} handleOption={handleOption4}  />}
              {(index === 4)&& <Cards card={card} handleOption={handleOption5}  />}
          </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;