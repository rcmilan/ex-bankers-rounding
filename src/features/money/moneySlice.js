import { createSlice } from "@reduxjs/toolkit";
import { EvenRound } from "../../helpers";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    value: 0,
  },
  reducers: {
    setExchangeRate: (state, action) => {
      const { money, symbol } = action.payload;
      if (!isNaN(money)) {
        state.value = `${EvenRound(parseFloat(money), 2)} [${symbol}]`;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setExchangeRate } = moneySlice.actions;

export default moneySlice.reducer;
