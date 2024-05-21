import { Component } from "react";
import { Button } from "antd";

class Son extends Component {
  state = {
    interval: null
  }
  componentDidMount() {
    console.log(`son did mount + ::>>`, )
    this.state.interval = setInterval(() => {
      console.log(`in execution ... + ::>>`, )
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
    console.log(`son will unmount + ::>>`, )
  }
  
  render() {
    return <div className="border border-red-400 px-4 py-4">
      <p>I'm Son</p>
      <p>Here is receive parent msg: {this.props.msg}</p>
      <Button type="primary" onClick={() => this.props.getMsg('hello, i am son msg')}>sendSonMsgToParent</Button>
    </div>
  }
}

class Parent extends Component {
  state = {
    parentMsg: 'I am parent msg',
    show: true
  }
  getSonMsg = (msg) => {
    console.log(`msg + ::>>`, msg)
  }
  render() {
    return <div className="mx-4 my-4 border border-blue-400 px-4 py-4">
      <p>I'm Parent</p>
      <Button className="mb-4" type="primary" onClick={() => this.setState({ show: !this.state.show})}>changeSonStatus</Button>
      {this.state.show && <Son msg={this.state.parentMsg} getMsg={this.getSonMsg} />}
    </div>
  }
}

function App() {
  return <>
    <Parent />
  </>
}

export default App