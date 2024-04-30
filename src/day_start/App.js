import { useState } from "react";
import './index.css'

function getName() {
  return '南京'
}
const LynasTing = {
  learn: () => {
    return 'jack'
  }
}

/**
 * 识别js表达式
 */
function App1() {
  const count = 99
  return (
    <div className="App">
      {/* 使用引号传递字符串 */}
      <div>{'相信未来，保持李志'}</div>
      {/* 使用JS变量 */}
      <div>{count}</div>
      {/* 函数调用和方法调用 */}
      <div>{getName()}</div>
      <div>{LynasTing.learn()}</div>
      {/* 使用JS对象 */}
      <div style={{color: 'red'}}>I'm a red div.</div>
    </div>
  );
}

/**
 * 实现列表渲染
 */
function App2() {
  const list = [
    { id: 101, name: 'Vue' },
    { id: 102, name: 'React' },
    { id: 103, name: 'Angular' }
  ]
  return (
    <div className="App">
      <ul>{list.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  )
}

/**
 * 条件渲染
 */
function App3() {
  const flag = false
  return (
    <div className="App">
      {/* 逻辑与 && */}
      <div>{flag && '欢迎使用'}</div>
      {/* 三元表达式 */}
      <div>{flag ? '您已登录' : '请登录'}</div>
    </div>
  )
}

/**
 * 多种条件渲染
 */
function App4() {
  const articleType = 3  // 0 1 3
  function getArticleTem() {
    if(articleType === 0) {
      return <div>我是无图文章</div>
    }else if(articleType === 1) {
      return <div>我是单图模式</div>
    }else {
      return <div>我是三图模式</div>
    }
  }
  return (
    <div className="App">
      {getArticleTem()}
    </div>
  )
}

/**
 * 事件绑定
 */
function App5( ) {
  // 事件默认参数 e
  // const handleClick = (e) => {
  //   console.log(`e + ::>>`, e)
  // }

  // 自定义传参
  // const handleClick = (name) => {
  //   console.log(`name + ::>>`, name)
  // }

  // 同时传事件默认参数和自定义传参
  const handleClick = (e, name) => {
    console.log(`e + ::>>`, e)
    console.log(`name + ::>>`, name)
  }
  return (
    <div className="App">
      <div onClick={(e) => handleClick(e, 'Lynas')}>click me</div>
    </div>
  )
}

/**
 * 组件
 */
function Button () {
  return <button>Click me !</button>
}

function App6() {
  return (
    <div className="App">
      <Button />
    </div>
  )
}

/**
 * useState
 */

function App7() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>Click me !{count}</button>
    </div>
  )
}

/**
 * 样式
 */
function App() {
  const style = {
    color: 'red',
    fontSize: '24px'
  }
  return (
    <div className="App">
      {/* 行内 */}
      <div style={style}>你好</div>
      {/* 类名控制 */}
      <div className="tip">世界</div>
    </div>
  )
}


export default App;
