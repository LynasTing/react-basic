import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'

import logo from '@/day_06/assets/logo.png'

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
  return (
    <Layout>
      <Header className="px-0 py-0">
        <img src={logo} alt='logo' className='w-48 h-14 scale-90' />
        <div className="absolute right-0 top-0 pr-5 text-white">
          <span className="mr-5">Lynas</span>
          <span className="inline-block cursor-pointer">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
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
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="overflow-y-auto px-5 py-5">
          内容
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout