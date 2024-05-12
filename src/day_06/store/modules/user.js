import { _request, setToken as _setToken, getToken } from "@/day_06/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() ?? ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
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