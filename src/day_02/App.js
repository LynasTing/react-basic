import { createContext, useContext } from "react"

const MsgContent = createContext()

const style = {
  border: '1px solid #707070',
  padding: '10px'
}

function A() {
  return (
    <div style={style}>
      <div>I am A !!!</div>
      <B />
    </div>
  )
}

function B() {
  const msg = useContext(MsgContent)
  return (
    <div style={style}>
      <div>I am B !!!</div>
      <p>{msg}</p>
    </div>
  )
}

function App() {
  const msg = `This App's msg`
  return (
    <MsgContent.Provider value={msg}>
      <div>
        <div>Here is App !!!</div>
        <A />
      </div>
    </MsgContent.Provider>
  )
}
export default App