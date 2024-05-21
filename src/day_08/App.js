import { create } from 'zustand'
import { Button } from 'antd'
import { useEffect } from 'react'

const useStore = create(set => ({
  // 定义状态
  count: 1,
  channels: [],
  // 修改状态的方法
  inc: () => set(state => ({ count: state.count + 1 })),
  fetchChannels: async () => {
    const res = await fetch('http://geek.itheima.net/v1_0/channels')
    console.log(`res + ::>>`, res)
    const jsonData = await res.json()
    console.log(`jsonData + ::>>`, jsonData)
    set({ channels: jsonData.data.channels})
  }
}))

function App() {
  const { count, inc, channels, fetchChannels } = useStore()
  useEffect(() => {
    fetchChannels()
  }, [])
  return <>
    <div className='mx-4 my-4 py-4 px-4'>
      <Button type='primary' onClick={inc}>{count}</Button>
      <ul>
        {channels.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  </>

}

export default App
