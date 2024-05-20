import { Button } from "antd"
import { memo, useMemo, useState } from "react"

function Son1() {
  // 此时父组件重新渲染会引起子组件的渲染
  console.log(`Son渲染了 + ::>>`, )
  return <>
    <div className="px-4 py-4 border-red-400">Yep, I'm Son</div>
  </>
}

const SonMemo1 = memo(function Son({ count }) {
  // 使用React.memo，只会在props发生改变时重新渲染
  // 此处为简单类型的数据实例
  console.log(`Son渲染了 + ::>>`, )
  return <>
    <div className="px-4 py-4 border border-red-400">
      <p>Yep, I'm Son</p>
      <p>Here is Son prop {count}</p>
    </div>
  </>
})

const SonMemo = memo(function Son({ list }) {
  // 使用React.memo，只会在props发生改变时重新渲染
  // 此处为引用类型的数据实例, 比较的是值的引用地址
  // 这里虽然对于子组件来说参数没变, 但是父组件本身的重新渲染就重新生成了新的list, 所以子组件也会跟着一起重新渲染
  console.log(`Son渲染了 + ::>>`, )
  return <>
    <div className="px-4 py-4 border border-red-400">
      <p>Yep, I'm Son</p>
      <p>Here is Son prop {list}</p>
    </div>
  </>
})



function App() {
  const [count, setCount] = useState(0)

  // 使用useMemo可以避免父组件的引用数据改变引发的子组件重新渲染
  const list = useMemo(() => {
    return [1, 2, 3]
  }, [])
  // const list = [1, 2, 3]
  return <>
    <div className="px-4 mx-4 my-4 py-4 border border-blue-400">
      <SonMemo count={list} />
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Click me !</Button>
    </div>
  </>
}

export default App