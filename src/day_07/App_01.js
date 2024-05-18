import { useReducer } from "react"
import { Button } from "antd"


/**
 * 1. 定义reducer函数 根据不同的action.type 返回不同的值
 */
const myReducer = (state, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1
    case 'DEC': 
      return state - 1
    case 'Set':
      return action.payload
    default: 
      return state
  }
}

function App() {
  // 2. 组件中调用useReducer
  const [count, dispatch] = useReducer(myReducer, 0)

  return <>
    <div className="flex py-4 px-4">
      {/* 3. 调用dispatch 通知reducer产生一个新的状态 使用新状态更新UI */}
      <Button onClick={() => dispatch({ type: 'INC'})}>+</Button>
      <p className="mx-4">{count}</p>
      <Button onClick={() => dispatch({ type: 'DEC'})}>-</Button>
      <Button className="ml-4" onClick={() => dispatch({ type: 'Set', payload: 100 })}>update</Button>
    </div>
  </>
}

export default App