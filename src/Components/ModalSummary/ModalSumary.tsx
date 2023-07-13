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

  function calculateAmount() {
    let amountPrice = 0;
    if (amount == "250g") {
      amountPrice = 10;
    } else if (amount == "500g") {
      amountPrice = 18;
    } else if (amount == "1000g") {
      amountPrice = 30;
    }
    return amountPrice;
  }

  function calculateDelivery() {
    let deliveryPrice = 0;
    if (delivery == "Every week") {
      deliveryPrice = 7.2;
    } else if (delivery == "Every 2 weeks") {
      deliveryPrice = 9.6;
    } else if (delivery == "Every month") {
      deliveryPrice = 12;
    }
    return deliveryPrice;
  }

  function calculatePrice() {
    return calculateAmount() + calculateDelivery();
  }

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
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className={style.footer}>
            <div className={style.priceText}>${calculatePrice()}/ mo</div>
            <Button
              disabled={false}
              text="Checkout"
              onClick={() => closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSumary;
