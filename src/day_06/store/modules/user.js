import { _request, setToken as _setToken, getToken, removeToken } from "@/day_06/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() ?? '',
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

/**
 * 获取token
 */
const fetchToken = params => {
  return async dispatch => {
    const res = await _request.post('/authorizations', params)
    dispatch(setToken(res.data.token))
  }
}

/**
 * 获取用户信息
 */
const fetchUserInfo = () => {
  return async dispatch => {
    const res = await _request.get('/user/profile')
    dispatch(setUserInfo(res.data))
  }
}

export { fetchToken, fetchUserInfo, clearUserInfo }

export default userStore.reducer