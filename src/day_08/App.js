import { forwardRef, useRef } from "react"
import { Button } from "antd"

const Son = forwardRef((props, ref) => {
  return <>
    <div className="py-4 px-4 border-blue-400">
      <p>I'm son's p !</p>
      <input type="text" ref={ref} className=" border-yellow-500" />
    </div>
  </>
})

function App() {
  const fetchSonInput = useRef(null)

  const handleBtnClick = () => {
    fetchSonInput.current.focus()
    console.log(`fetchSonInput + ::>>`, fetchSonInput)
  }
  return <>
    <div className="my-4 mx-4 py-4 px-4 border border-red-400">
      <Son ref={fetchSonInput} />
      <Button type="primary" onClick={handleBtnClick}>focus</Button>
    </div>
  </>
}

export default App