import './index.scss'
import classNames from 'classnames'
import { NavBar, DatePicker } from 'antd-mobile'
import { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import dayjs from 'dayjs'
import DailyBill from './components/DayBill'
import { useSelector } from 'react-redux'

const Month = () => {
  const [showDatePicker, setShowDatePicker] = useState(false)

  const [dateText, setDateText] = useState(dayjs().format('YYYY-MM'))

  const [selectMonthBill, setSelectMonthBill] = useState([])

  const handleSelectDate = (e) => {
    const time = dayjs(e).format('YYYY-MM')
    // 展示的文本
    setDateText(time)
    // 选择月的数据
    setSelectMonthBill(monthGroup[time] ?? [])
  }

  const { billList } = useSelector(state => state.bill)

  // Memo一般用来对数据进行二次处理，类似于vue的computed
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, item => dayjs(item.date).format('YYYY-MM'))
  }, [billList])

  /**
   * 拿到选择月或者当前月的数据
   */
  const monthResult = useMemo(() => {
    const pay = selectMonthBill.filter(item => item.type === 'pay').reduce((p, n) => p + n.money, 0)
    const income = selectMonthBill.filter(item => item.type === 'income').reduce((p, n) => p + n.money, 0)
    return {
      pay,
      income,
      total: pay + income
    }
  }, [selectMonthBill])

  /**
   * 默认数据
   */
  useEffect(() => {
    const defaultV = monthGroup[dayjs().format('YYYY-MM')]
    if(defaultV) setSelectMonthBill(defaultV)
  }, [monthGroup])

  // 日账单列表
  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(selectMonthBill, item => dayjs(item.date).format('YYYY-MM-DD'))
    const keys = Object.keys(groupData)
    return {
      groupData,
      keys
    }
  }, [selectMonthBill])
  console.log(`dayGroup + ::>>`, dayGroup)
  return (
    <div className="month ">
      <NavBar backArrow={false}>月度收支</NavBar>
      <div className="month-background-img h-full px-base py-base">
        <div className='flex items-center mb-base text-bold' onClick={() => setShowDatePicker(true)}>
          <span>{dateText}账单</span>
          <span className={classNames('arrow', showDatePicker && 'expand')}></span>
        </div>
        <div className="flex justify-around">
          <div className="flex col items-center">
            <span className='text-xl text-bold'>{monthResult?.pay.toFixed(2) ?? 0}</span>
            <p>支出</p>
          </div>
          <div className="flex col items-center">
            <span className='text-xl text-bold'>{monthResult?.income.toFixed(2) ?? 0}</span>
            <p>收入</p>
          </div>
          <div className="flex col items-center">
            <span className='text-xl text-bold'>{monthResult?.total.toFixed(2) ?? 0}</span>
            <p>结余</p>
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
      {
        dayGroup.keys.map(item => {
          return <DailyBill key={item} date={item} dayBill={dayGroup.groupData[item]} />
        })
      }
    </div>
  )
}

export default Month