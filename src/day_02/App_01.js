import { useState } from "react"

function Son({ children, onGetSonMsg }) {
  /**
   * 调用父组件的方法
   */
  const sendMyMsg = () => {
    onGetSonMsg('你好我是Son')
  }
  return (
    <div>
      <p>I'm son. </p>
      <p>{children}</p>
      <button onClick={sendMyMsg}>点击修改msg的值</button>
    </div>
  )
}

function App1() {
  const [msg, setMsg] = useState('哈哈哈哈哈')
  /**
   * 修改msg
   */
  const handleChangeMsg = (msg) => {
    setMsg(msg)
  }

  return (
    <div>
      <p>这里是父组件的msg{msg}</p>
      <Son onGetSonMsg={handleChangeMsg}>
        <span>Yes, you're son</span>
      </Son>
    </div>
  )
}

function A({ getAName }) {

  /**
   * 
   */
  const handleClickSend = (name) => {
    getAName(name)
  }
  return (
    <div>
      <p>Here's component A</p>
      <button onClick={() => handleClickSend('I am A !!!!!!')}>Click me send A name</button>
    </div>
  )
}

function B(props) {
  return (
    <div>
      <p>Here's component B</p>
      <p>This is receive A name：{props.aName}</p>
    </div>
  )
}

function App() {
  const [aName, setAName] = useState('hah')
  
  const getAName = (name) => {
    setAName(name)
  }
  return (
    <div>
      <A getAName={getAName} />
      <hr />
      <p>App in middle</p>
      <hr />
      <B aName={aName}/>
      <hr />
    </div>
  )
}


export default App