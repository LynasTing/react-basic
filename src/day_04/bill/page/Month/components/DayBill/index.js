import { useMemo } from 'react'
import '../../index.scss'
import classNames from 'classnames'


const DailyBill = ({ date, dayBill }) => {
  const dailyBillData = useMemo(() => {
    console.log(`dayBill + ::>>`, dayBill)
    const pay = dayBill.filter(item => item.type === 'pay').reduce((p, n) => p + n.money, 0)
    console.log(`pay + ::>>`, pay)
    const income = dayBill.filter(item => item.type === 'income').reduce((p, n) => p + n.money, 0)
    return {
      pay, 
      income,
      total: pay + income
    }    
  }, [dayBill])
  return (
    <div className="py-4 px-4 my-4 bg-white rounded flex flex-col justify-between">
      <div className="flex justify-between items-center mb-3">
        <div>{date}</div>
        <div className={classNames('arrow')}></div>
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
  )
}

export default DailyBill