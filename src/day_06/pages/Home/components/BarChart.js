import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const BarChart = ({ title }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    // 图表的实例对象
    const myChart = echarts.init(chartRef.current)
  
    // 图表参数
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'Angular', 'React']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [845, 566, 3000],
          type: 'bar'
        }
      ]
    }
    option && myChart.setOption(option)
  }, [title])

  return (
    <div className='w-96 h-80' ref={chartRef}></div>
  )
}

export default BarChart

