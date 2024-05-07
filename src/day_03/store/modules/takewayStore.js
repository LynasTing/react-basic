import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [],
    activeIndex: 0,
    // 购物车
    carList: []
  },
  // 同步方法
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    },
    setActiveIndex(state, action) {
      if(state.activeIndex !== action.payload) state.activeIndex = action.payload
    },
    setCarList(state, action) {
      const findItem = state.carList.find(item => item.id === action.payload.id)
      if(findItem) {
        findItem.count ++
      }else {
        state.carList.push(action.payload)
      }
    },
    // 增加数量
    incrementCount(state, action) {
      const filterItem = state.carList.find(item => item.id === action.payload.id)
      filterItem.count++
    },
    // 减少数量
    decrementCount(state, action) {
      const filterItem = state.carList.find(item => item.id === action.payload.id)
      if(filterItem.count === 1) {
        const index = state.carList.findIndex(item => item.id === action.payload.id)
        state.carList.splice(index, 1)
      }else {
        filterItem.count--
      }
    },
    // 清空购物车
    clearCarList(state) {
      state.carList = []
    }
  }
})
  
/**
 * 通过接口获取到菜单
 */
const { setFoodsList, setActiveIndex, setCarList, incrementCount, decrementCount, clearCarList } = foodsStore.actions
const fetchFoodsList = () => {
  // 虽然同步方法定义在reducers里，但是要通过actions解构出来
  return async (dispatch) => {
    const res = await axios.get('http://localhost:4875/takeway')
    dispatch(setFoodsList(res.data))
  }
}

export { fetchFoodsList, setActiveIndex, setCarList, incrementCount, decrementCount, clearCarList }

export default foodsStore.reducer