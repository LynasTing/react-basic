import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: 'counter',
  // 默认初始值
  initialState: {
    count: 1
  },
  // 修改方法
  reducers: {
    increment(state) {
      state.count++ 
    },
    decrement(state) {
      state.count--
    },
    addToNum(state, action) {
      state.count = action.payload
    }
  }
})

// 解构出actionCreate中的函数
const { increment, decrement, addToNum } = counterStore.actions

// 获取到reducer
const reducer = counterStore.reducer

// 按需导出
export { increment, decrement, addToNum }

// 默认导出reducer
export default reducer