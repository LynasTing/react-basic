import { Button } from "antd"
import { useMemo, useState } from "react"

/**
 * 计算斐波那契数列之和
 */
const fib = n => {
  console.log(`斐波执行了 + ::>>`, )
  if(n < 3) {
    return 1
  }
  return fib(n - 2) + fib(n - 1)
}

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  /**
   * 一般用于在组件重新渲染的时候缓存计算的结果
   * 这里如果不用useMemo，那么setCount2的执行也会影响fib函数去执行
   */
  const result = useMemo(() => {
    return fib(count1)
  }, [count1])
  return <>
    <div className="px-4 py-4">
      <h2>result: {result}</h2>
      <Button type="primary" onClick={() => setCount1(count1 + 1)}>Change count 1, and count1: {count1}</Button>
      <Button type="primary" className="ml-4" onClick={() => setCount2(count2 + 1)}>Change count2, and count2: {count2}</Button>
    </div>
  </>


}
export default App