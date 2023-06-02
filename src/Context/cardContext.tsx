import { createContext, useState } from "react";

export const CardContext = createContext({});

export const CardProvider = ({ children }: any) => {
  const [coffeeMethod, setCoffeeMethod] = useState<string>("");
  const [coffeeType, setCoffeeType] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [grindType, setGrindType] = useState<string>("");
  const [delivery, setDelivery] = useState<string>("");

  return (
    <CardContext.Provider value={{ coffeeMethod, setCoffeeMethod, coffeeType, setCoffeeType, amount, setAmount, grindType, setGrindType, delivery, setDelivery }}>
      {children}
    </CardContext.Provider>
  );
};
