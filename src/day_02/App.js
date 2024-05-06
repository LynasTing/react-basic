import { useEffect, useState } from "react"

function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      window.alert('I am useEffect')
    }, 3000);
    return () => {
      clearInterval(timer)
      window.alert('useEffect is clear')
    }
  }, [])
  return <div>I'm son !</div>
}

function App() {
  
  // useEffect依赖项参数
  // 1. 没有依赖，组件初始渲染完毕和组件更新时执行
  const [count, setCount] = useState(1)
  // useEffect(() => {
  //   window.alert('I am useEffect')
  // })

  // 2. 空数组依赖，只在初始渲染完毕时执行
  

  // 特定依赖项，在组件初始渲染完毕和依赖项变化时执行
  const [flag, setFlag] = useState(true)
  // useEffect(() => {
  //   window.alert('I am useEffect')
  // }, [count])

  return (
    <div>
      {flag && <Son />}
      <button onClick={() => setFlag(false)}>Click me，make flag equal to false. </button>
    </div>
  )
}
export default App