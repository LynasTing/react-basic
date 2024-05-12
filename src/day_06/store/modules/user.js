import { _request } from "@/day_06/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') ?? ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      localStorage.setItem('token', action.payload)
    }
  }
})

const { setToken } = userStore.actions

/**
 * 获取token
 */
const fetchToken = params => {
  return async dispatch => {
    const res = await _request.post('/authorizations', params)
    console.log(`res + ::>>`, res)
    dispatch(setToken(res.data.token))
  }
}

export { setToken, fetchToken }

export default userStore.reducer