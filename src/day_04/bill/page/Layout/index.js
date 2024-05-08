import { Outlet } from 'react-router-dom'
import { Button } from 'antd-mobile'

const Layout = () => {
  return (
    <div>
      <p>I'm Layout</p>
      <div>
        <Button color='primary'>Test global theme</Button>
        <div className='purple'>
          <Button color='primary'>Test partial theme</Button>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout