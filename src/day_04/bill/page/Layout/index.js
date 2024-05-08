import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <p>I'm Layout</p>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout