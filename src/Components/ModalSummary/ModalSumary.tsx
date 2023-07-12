import { useContext } from "react";
import style from "./modalSummary.module.css";
import { CardContext } from "../../Context/cardContext";
import Button from "../../Commons/Button/Button";

interface ModalProps {
  closeModal: () => void;
}

const ModalSumary = ({ closeModal }: ModalProps) => {
  const { coffeeMethod, coffeeType, amount, grindType, delivery } = useContext(
    CardContext
  ) as any;

  return (
    <div className={style.overlay}>
    <div className={style.modalContainer}>
      <div className={style.topFrame}>
        <h1 className={style.modalTitle}>Order Summary</h1>
      </div>
      <div className={style.textContainer}>
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
          <span className={style.stateText}>{amount ? amount : "_____"}</span>
          {coffeeMethod !== "Capsule" && " a la "}
          <span className={style.stateText}>
            {coffeeMethod !== "Capsule" && grindType}
          </span>
          , sent to me{" "}
          <span className={style.stateText}>
            {delivery ? delivery : "_____"}
          </span>
          .”
        </p>
        <p className={style.checkText}>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <div className={style.footer}>
          <div className={style.priceText}>$14.00/ mo</div>
          <Button disabled={false} text="Checkout" onClick={()=>closeModal}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ModalSumary;
