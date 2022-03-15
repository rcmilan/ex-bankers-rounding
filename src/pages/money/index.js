import React from "react";
import MoneyInput from "../../components/moneyInput";
import MoneyOutput from "../../components/moneyOutput";
import { setExchangeRate } from "../../features/money/moneySlice";
import { useSelector, useDispatch } from "react-redux";

function Money() {
  const amount = useSelector((state) => state.money.value);
  const dispatch = useDispatch();

  const exchangeRate = 5.0962;

  return (
    <>
      <div>
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
      </div>
      <div>
        <MoneyOutput output={amount} />
      </div>
    </>
  );
}

export default Money;
