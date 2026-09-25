"use client"

import ReactECharts from 'echarts-for-react';

export default function Chart() {
  const option = {
      xAxis: {
        type: 'category',
        data: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [30, 29, 40, 51, 64, 59, 80, 79, 81],
          type: 'line',
          smooth: true
        },
        {
          data: [20, 17, 35, 41, 44, 69, 70, 89, 81],
          type: 'line',
          smooth: true
        }
        
      ]
    };

  return (
    <ReactECharts option={option} />
  )
}
