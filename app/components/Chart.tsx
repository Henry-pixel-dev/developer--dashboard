"use client"

import ReactECharts from 'echarts-for-react'

const dayData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  series1: [30, 29, 40, 51, 64, 59, 80],
  series2: [20, 17, 35, 41, 44, 69, 70],
}

const monthData = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  series1: [30, 29, 40, 51, 64, 59, 80, 79, 81, 60, 55, 70],
  series2: [20, 17, 35, 41, 44, 69, 70, 89, 81, 50, 45, 60],
}

interface ChartProps {
  currDate: string
}

export default function Chart({ currDate }: ChartProps) {
  const { labels, series1, series2 } = currDate === 'months' ? monthData : dayData

  const option = {
    xAxis: { type: 'category', data: labels },
    yAxis: { type: 'value' },
    series: [
      { data: series1, type: 'line', smooth: true },
      { data: series2, type: 'line', smooth: true },
    ],
  }

  return <ReactECharts option={option} notMerge={true} />
}