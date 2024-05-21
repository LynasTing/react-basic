import { create } from 'zustand'
import { Button } from 'antd'

const useStore = create(set => ({
  // 定义状态
  count: 1,
  // 修改状态的方法
  inc: () => set(state => ({ count: state.count + 1 }))
}))

function App() {
  const { count, inc } = useStore()
  return <>
    <div className='mx-4 my-4 py-4 px-4'>
      <Button type='primary' onClick={inc}>{count}</Button>
    </div>
  </>

}

export default App
