import { configureStore } from "@reduxjs/toolkit";
import billStore from "./modules/billStore";

const store = configureStore({
  reducer: {
    bill: billStore
  }
})

export default store 