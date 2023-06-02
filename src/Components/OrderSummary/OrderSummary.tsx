import { useContext } from "react";
import style from "./orderSummary.module.css";
import { CardContext } from "../../Context/cardContext";

const OrderSummary = () => {
  
  const { coffeeMethod, coffeeType, amount, grindType, delivery } = useContext(CardContext) as any;

  return (
    <div className={style.summaryContainer}>
      <div className={style.textContainer}>
        <h1 className={style.titleSummary}>ORDER SUMMARY</h1>
        <p className={style.textSummary}>
          “I drink my coffee using{" "}
          <span className={style.stateText}>
            {coffeeMethod ? coffeeMethod : "_____"}
          </span>
          , with a span{" "}
          <span className={style.stateText}>
            {" "}
            {coffeeType ? coffeeType : "______"}{" "}
          </span>{" "}
          type of bean.{" "}
          <span className={style.stateText}>
            {amount ? amount : "_____"}
          </span>
          {coffeeMethod !== "Capsule"&& " a la "}
          <span className={style.stateText}>
            {coffeeMethod !== "Capsule"&& grindType}
          </span>
          , sent to me{" "}
          <span className={style.stateText}>
            {delivery ? delivery : "_____"}
          </span>
          .”
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
