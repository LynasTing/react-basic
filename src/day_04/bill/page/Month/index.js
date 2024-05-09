import './index.scss'
import classNames from 'classnames'
import { NavBar, DatePicker } from 'antd-mobile'
import { useMemo, useState } from 'react'
import _ from 'lodash'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

const Month = () => {
  // 控制日期选择器的隐藏
  const [showDatePicker, setShowDatePicker] = useState(false)

  // 当前选择时间
  const [currentDate, setCurrentDate] = useState(() => dayjs().format('YYYY-MM'))

  /**
   * 选择记账日期
   */
  const handleSelectDate = e => {
    setCurrentDate(dayjs(e).format('YYYY-MM'))
  }

  const { billList } = useSelector(state => state.bill)
  /**
   * 账单数据平铺
   */
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, item => dayjs(item.date).format('YYYY-MM'))
  }, [billList])

  console.log(`monthGroup + ::>>`, monthGroup)

  return (
    <div className="month my-base">
      <NavBar backArrow={false}>月度收支</NavBar>
      <div className="month-background-img h-full px-base py-base">
        <div className='flex items-center mb-base text-bold' onClick={() => setShowDatePicker(true)}>
          <span>{ currentDate }月账单</span>
          <span className={classNames('arrow', showDatePicker && 'expand')}></span>
        </div>
        <div className="flex justify-around">
          <div className="flex col items-center">
            <span className='text-xl text-bold'>100</span>
            <p>支出</p>
          </div>
          <div className="flex col items-center">
            <span className='text-xl text-bold'>200</span>
            <p>收入</p>
          </div>
          <div className="flex col items-center">
            <span className='text-xl text-bold'>200</span>
            <p>支出</p>
          </div>
        </div>
      </div>
      <DatePicker
        precision='month'
        title="记账日期"
        visible={showDatePicker}
        max={new Date()}
        onClose={() => setShowDatePicker(false)}
        onCancel={() => setShowDatePicker(false)}
        onConfirm={e => handleSelectDate(e)}
      /> 
    </div>
  )
}

export default Month