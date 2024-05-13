import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { fetchUserInfo, clearUserInfo } from '@/day_06/store/modules/user'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'

import logo from '@/day_06/assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />
  }
]

const GeekLayout = () => {
  const location = useLocation()
  // 菜单栏反向高亮
  const selectPath = location.pathname

  const navigate = useNavigate()
  /**
   * 点击左侧菜单栏
   */
  const handleMenuClick = (e) => {
    console.log(`e + ::>>`, e)
    navigate(e.key)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    /**
     * 获取用户信息
     */
    const getUserInfo = () => {
      dispatch(fetchUserInfo())
    }

    getUserInfo()
  }, [dispatch])

  const { userInfo } = useSelector(state => state.user)

  /**
   * 退出登录
   */
  const handleLogout = () => {
    dispatch(clearUserInfo())
    navigate('/login')
  }

  return (
    <Layout>
      <Header className="px-0 py-0">
        <img src={logo} alt='logo' className='w-48 h-14 scale-90' />
        <div className="absolute right-0 top-0 pr-5 text-white">
          <span className="mr-5">{userInfo.name}</span>
          <span className="inline-block cursor-pointer">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={handleLogout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            items={items}
            selectedKeys={selectPath}
            onClick={handleMenuClick}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="overflow-y-auto px-5 py-5">
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout