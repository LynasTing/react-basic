import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
      <div>我是Layout</div>
      <p>
        <Link to="board">面板</Link>
      </p>
      <p>
        <Link to="/">关于</Link>
      </p>
      <Outlet />
    </div>
  )
}
export default Layout
