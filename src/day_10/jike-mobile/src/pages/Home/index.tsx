import { Tabs } from 'antd-mobile'
import './styles.css'
import useTabs from './useTabs'
import HomeList from './HomeList'

const Home = () => {
 const { channels } = useTabs()

  return <>
    <div className='tab-container'>
      <Tabs defaultActiveKey={'0'}>
        {channels.map(item => (
          <Tabs.Tab title={item.name} key={item.id}>
            <div className='list-container'>
              <HomeList channel_id={item.id + ''} />
            </div>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  </>
}

export default Home