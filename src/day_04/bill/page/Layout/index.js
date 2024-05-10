import { Outlet, useNavigate } from 'react-router-dom'
import { getBillList } from '@/day_04/bill/store/modules/billStore'
import { useDispatch } from 'react-redux' 
import { useEffect } from 'react'
import './index.scss'
import { TabBar } from 'antd-mobile'
import { BillOutline, CalculatorOutline, AddCircleOutline } from 'antd-mobile-icons'

const tabs = [
  {
    key: '/',
    title: '月度账单',
    icon: <BillOutline />
  },
  {
    key: '/new',
    title: '记账',
    icon: <AddCircleOutline />
  },
  {
    key: '/year',
    title: '年度账单',
    icon: <CalculatorOutline />
  },
]

const Layout = () => {
  const dispatch = useDispatch()
  /**
   * 获取账单信息
   */
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])
  
  const navigate = useNavigate() 
  /**
   * 切换路由
   */
  const handleChangeRouter = (path) => {
    navigate(path)
  }
  return (
    <div className='layout bg-gray-200 h-screen'>
      <div className='container'>
        <Outlet />
      </div>
      <div className='footer bg-white'>
        <TabBar onChange={handleChangeRouter}>
          {tabs.map(item => (<TabBar.Item key={item.key} icon={item.icon} title={item.title} />))}
        </TabBar>
      </div>
    </div>
  )
}

export default Layout