import { NavBar, DatePicker, Input } from 'antd-mobile'
import Icon from '@/day_04/bill/components/Icon'
import { expenseTypes } from '@/day_04/bill/constants'
import classNames from 'classnames'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBillAPI } from '../../store/modules/billStore'
import dayjs from 'dayjs'

const New = () => {
  const navigate = useNavigate()
  const titleOptions = [
    { label: '支出', type: 'pay' },
    { label: '收入', type: 'income' },
  ]
  const [titleType, setTitleType] = useState('pay')

  // 输入金额
  const [inputMoney, setInputMoney] = useState(0.00)

  // 当前所选来源/去向
  const [useFor, setUseFor] = useState('')

  /**
   * 点击
   */
  const handleUseForClick = (sub => {
    setUseFor(sub)
  })


  const dispatch = useDispatch()
  /**
   * 保存
   */
  const handleClickSave = () => {
    const data = {
      type: titleType,
      date,
      money: titleType === 'pay' ? -inputMoney : +inputMoney,
      useFor
    }
    dispatch(addBillAPI(data))
  }

  const [showDatePicker, setShowDatePicker] = useState(false)

  const [date, setDate] = useState()

  /**
   * 选择日期
   */
  const handleSelectDate = (e) => {
    setDate(e)
  }

  return (
    <div className="bg-green-100 h-screen flex flex-col">
      <NavBar onBack={() => navigate(-1)}>记一笔</NavBar>
      <div className='flex justify-center'>
        {titleOptions.map((item, i) => {
          return <div
            key={i}
            className={classNames('bg-white py-2 px-4 rounded-lg', titleType === item.type ? 'bg-black text-white' : '', !i ? 'mr-4' : '')}
            onClick={() => setTitleType(item.type)}
          >{item.label}</div>
        })}
      </div>
      <div className="bg-white mx-4 py-1 px-3 my-4 border border-gray-400 rounded-md flex justify-between items-center">
        <div className='bg-green-100 py-2 px-2 rounded-md' onClick={() => setShowDatePicker(true)}>{dayjs(date).format('YYYY-MM-DD')}</div>
        <div className='text-xl flex w-28 items-center my-2'>
          <Input type="number" placeholder='0.00' className='w-full h-full' value={inputMoney} onChange={(v) => setInputMoney(v)} />
          <span>￥</span>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-tl-xl rounded-tr-xl">
        {expenseTypes[titleType].map((item, index) => {
          return (
            <div key={index} className='my-4'>
              <h5 className='mb-4 ml-4 font-semibold'>{item.name}</h5>
              <div className="flex px-4 flex-wrap">
                {item.list.map((sub, subIndex) => {
                  return (
                    <div className='flex flex-col items-center w-20 py-3 hover:bg-green-100' key={subIndex} onClick={() => handleUseForClick(sub.type)}>
                      <Icon type={sub.type}/>
                      <span>{sub.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div 
        className='tracking-widest w-56 text-center rounded-lg text-green-500 text-lg py-2 inline-block fixed bottom-9 bg-green-100 -translate-x-2/4 left-2/4'
        onClick={() => handleClickSave()}
      >保存</div>
      <DatePicker
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

export default New