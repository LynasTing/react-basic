import { Outlet } from 'react-router-dom'
import { Button } from 'antd-mobile'
import { getBillList } from '@/day_04/bill/store/modules/billStore'
import { useDispatch } from 'react-redux' 
import { useEffect } from 'react'

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])
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