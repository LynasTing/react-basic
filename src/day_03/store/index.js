import { configureStore } from "@reduxjs/toolkit";
import foodsReducers from './modules/takewayStore'

const store = configureStore({
  reducer: {
    foods: foodsReducers
  }
})

export default store