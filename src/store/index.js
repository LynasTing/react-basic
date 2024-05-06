import { configureStore } from "@reduxjs/toolkit";
import counterStore from './modules/counterStore'
import channelStore from "./modules/channelStore";

const store = configureStore({
  reducer: {
    counter: counterStore,
    channel: channelStore
  }
})

export default store