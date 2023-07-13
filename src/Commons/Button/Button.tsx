import style from "./button.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../../Context/cardContext";

interface ButtonProps {
  disabled: boolean;
  text: string;
  linkTo?: string;
  onClick?: ()=> void
}

const Button = ({ disabled, text, linkTo, onClick }: ButtonProps) => {
  
  const { coffeeMethod, coffeeType, amount, grindType, delivery } = useContext(
    CardContext
  ) as any;

  const isButtonDisabled =
    !coffeeMethod || !coffeeType || !amount || (!grindType&& coffeeMethod != "Capsule") || !delivery;

  if (disabled && isButtonDisabled) {
    return (
      <div className={style.disabled}>
        <span className={style.linkTag} role="button">
          {text}
        </span>
      </div>
    );
  }
  return (
    <div className={style.tagContainer}>
      <Link className={style.linkTag} to={`/${linkTo? linkTo : ""}`} onClick={onClick}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
