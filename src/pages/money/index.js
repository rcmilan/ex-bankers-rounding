import React, { useState } from "react";
import MoneyInput from "../../components/moneyInput";
import MoneyOutput from "../../components/moneyOutput";
import { setExchangeRate } from "../../features/money/moneySlice";
import { useSelector, useDispatch } from "react-redux";

function Money() {
  const [currency, setCurrency] = useState("BRL");

  const amount = useSelector((state) => state.money.value);
  const dispatch = useDispatch();

  const exchangeRate = 5.0962;

  const currencySelector = () => {
    switch (currency) {
      case "BRL":
        return (
          <>
            <button onClick={() => setCurrency("USD")}>usar USD</button>
            <MoneyInput
              text={"BRL"}
              update={(inputValue) => {
                dispatch(
                  setExchangeRate({
                    money: inputValue * exchangeRate,
                    symbol: "USD",
                  })
                );
              }}
            />
          </>
        );
      case "USD":
      default:
        return (
          <>
            <button onClick={() => setCurrency("BRL")}>usar BRL</button>
            <MoneyInput
              text={"USD"}
              update={(inputValue) => {
                dispatch(
                  setExchangeRate({
                    money: inputValue / exchangeRate,
                    symbol: "BRL",
                  })
                );
              }}
            />
          </>
        );
    }
  };

  return (
    <>
      <div>{currencySelector()}</div>
      <div>
        <MoneyOutput output={amount} />
      </div>
    </>
  );
}

export default Money;
