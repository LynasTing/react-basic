type Props = {
  name: string,
  // ReactNode 支持传入多种类型, 包括: ReactElement、string、number、ReactFragment、ReactPortal、boolean、null、undefined
  children?: React.ReactNode
}

function Button(props: Props) {
  const { name, children } = props
  return <button>name: {name}, children: {children}</button>
}

function App() {
  return <div>
    <p>This is a page !</p>
    <Button name="first" />
    <Button name="second">
      <span>I am children </span>
    </Button>
  </div>
}

export default App