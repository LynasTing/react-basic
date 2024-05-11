import { useMemo, useState } from 'react'
import '../../index.scss'
import classNames from 'classnames'


const DailyBill = ({ date, dayBill }) => {
  // 展示单日消费列表
  const [visible, setVisible] = useState(false)
  const dailyBillData = useMemo(() => {
    const pay = dayBill.filter(item => item.type === 'pay').reduce((p, n) => p + n.money, 0)
    const income = dayBill.filter(item => item.type === 'income').reduce((p, n) => p + n.money, 0)
    return {
      pay, 
      income,
      total: pay + income
    }    
  }, [dayBill])
  return (
    <div className="my-4 rounded">
      <div className="header mb-2 bg-white py-4 px-4 rounded">
        <div className="flex justify-between items-center mb-3">
          <div>{date}</div>
          <div className={classNames('arrow', visible && 'expand')} onClick={() => setVisible(!visible)}></div>
        </div>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-red-400">支出</span>
            <span className="text-gray-800">{dailyBillData.pay.toFixed(2)}</span>
          </p>
          <p>
            <span className="text-green-300">收入</span>
            <span className="text-gray-800">{dailyBillData.income.toFixed(2)}</span>
          </p>
          <p>
            <span>结余</span>
            <span className='text-lg '>{dailyBillData.total.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <div className="content bg-white py-3 px-3 rounded" style={{ display: visible ? 'block' : 'none' }}>
        {dayBill.map(item => {
          return <div key={item.id} className="flex justify-between items-center mx-3">
            <div>{item.useFor}</div>
            <div className='text-red-400'>{item.money}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default DailyBill