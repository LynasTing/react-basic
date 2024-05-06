import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channels: []
  },
  reducers: {
    setChannels(state, action) {
      state.channels = action.payload
    }
  }
})

/**
 * 异步修改state
 */
const fetchChannels = () => {
  // 解构出同步方法
  const { setChannels } = channelStore.actions
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannels }

export default channelStore.reducer