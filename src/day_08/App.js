import { Component} from 'react'
class Counter extends Component {
  // state = {} 是固定写法
  state = {
    count: 1
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={this.setCount}>{this.state.count}</button>
  }
}
function App() {
  return <>
    <div className='my-4 mx-4 border border-blue-400 px-4 py-4'>
      <Counter />
    </div>
  </>
}

export default App