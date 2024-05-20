import { Button } from "antd"
import { memo, useCallback, useState } from "react"

const SonInput = memo(function SonInput({ onChange }) {
  console.log(`sonInput render + ::>>`, )
  return <input type="text" placeholder="input..." onChange={e => onChange(e.target.value) } />
})

function App() {
  const [count, setCount] = useState(0)

  // 这里的子组件SonInput会随着父组件的justLog函数的重新生成而重新渲染
  const justLog1 = () => {
    console.log(`I just log function ... + ::>>`, )
  }
  // 使用useCallback可以将不需要重新渲染的函数缓存起来
  const justLog = useCallback(v => {
    console.log(`I just log function ... + ::>>`, )
  }, [])

  return <>
    <div className="border border-blue-400 mx-4 my-4 px-4 py-4">
      <SonInput onChange={justLog} />
      <Button onClick={() => setCount(count + 1)}>Click me: {count}</Button>
    </div>
  </>
}

export default App