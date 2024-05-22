type Props = {
  onGetMsg: (msg: string) => void
}

function Son(props: Props) {
  const { onGetMsg } = props
  /**
   * 1. 在组件内部调用
   */
  const sonHandleClick = () => {
    onGetMsg('Hello, I am son')
  }
  return <div>
    <button onClick={(sonHandleClick)}>Click son's button to send son's msg</button>
  </div>
}

function App() {

  /**
   * 3. 使用函数调用的方式,ts无法再检测类型，需要重新声明类型
   */
  const handleFatherMsg = (sonMsg: string) => {
    console.log(`sonMsg + ::>>`, sonMsg)
  }
  return <>
    {/* 2. 使用内联函数的方式，ts可以检测到传参和返回值的类型 */}
    <Son onGetMsg={(msg) => console.log(`msg + ::>>`, msg)} />
    <Son onGetMsg={handleFatherMsg} />
  </>
}

export default App