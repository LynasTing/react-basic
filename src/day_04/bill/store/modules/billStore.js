import { createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    },
    addBill(state, action) {
      state.billList.push(action.payload)
    }
  }
})

const { setBillList, addBill } = billStore.actions

/**
 * 获取账单列表
 */
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:4875/ka')
    dispatch(setBillList(res.data))
  }
}

/**
 * 调用接口新增账单
 */
const addBillAPI = (data) => {
  return async () => {
    const res = await axios.post('http://localhost:4875/ka', data)
    addBill(res.data)
  }
}

export { getBillList, addBillAPI }

export default billStore.reducer