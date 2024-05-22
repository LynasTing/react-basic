import { useEffect, useRef } from "react"

function App() {
  // 使用useRef时为变量定义html类型
  const inputRef = useRef<HTMLInputElement>(null)

  const timerId = useRef<number | NodeJS.Timeout>()
  useEffect(() => {
    inputRef.current?.focus()

    timerId.current = setInterval(() => {
      console.log(`1 + ::>>`, )
    }, 1500)

    return () => {
      clearInterval(timerId.current)
    }
  }, [])
  return <>
    <input type="text" ref={inputRef} />
  </>
}

export default App