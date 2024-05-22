import { Tabs } from 'antd-mobile'
import './styles.css'
import useTabs from './useTabs'
import HomeList from './HomeList'

const Home = () => {
 const { channels } = useTabs()
  return <>
    <div className='tab-container'>
      <Tabs>
        {channels.map(item => (
          <Tabs.Tab title={item.name} key={item.id}>
            <HomeList channel_id={item.id + ''} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
    <div className='list-container'>
      
    </div>
  </>
}
export default Home