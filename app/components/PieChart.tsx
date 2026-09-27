"use client"

import ReactECharts from 'echarts-for-react';


export default function PieChart() {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            down: '1%',
            left: 'center'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
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
    <ReactECharts option={option} notMerge={true}/>
  )
}
