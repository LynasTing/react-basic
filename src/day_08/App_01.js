import { forwardRef, useRef, useImperativeHandle } from "react"
import { Button } from "antd"

const Son = forwardRef((props, ref) => {
  const inputRef = useRef(null)

  const inputFocus = () => {
    inputRef.current.focus()
  }

  // useImperativeHandle 暴露出的是一个对象结构
  useImperativeHandle(ref, () => {
    return {
      inputFocus
    }
  })

  return <>
    <div className="py-4 px-4 border-blue-400">
      <p>I'm son's p !</p>
      <input type="text" ref={inputRef} className=" border-yellow-500" />
    </div>
  </>
})

function App() {
  const fetchSonInput = useRef(null)

  const handleBtnClick = () => {
    fetchSonInput.current.inputFocus()
  }
  return <>
    <div className="my-4 mx-4 py-4 px-4 border border-red-400">
      <Son ref={fetchSonInput} />
      <Button type="primary" onClick={handleBtnClick}>focus</Button>
    </div>
  </>
}

export default App