"use client"

import ReactECharts from 'echarts-for-react';


export default function PieChart() {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '30%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 234, name: 'Desktop' },
                { value: 162, name: 'Mobile' },
                { value: 122, name: 'Tablet' },
                { value: 44, name: 'Unknown' },

            ]
            }
        ]
        };

  return (
    <ReactECharts option={option} />
  )
}
