import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "../features/money/moneySlice";

export default configureStore({
  reducer: { money: moneyReducer },
});
