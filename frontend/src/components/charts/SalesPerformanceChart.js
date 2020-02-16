import React from 'react';
import Chart from 'react-apexcharts'

function SalesPerformanceChart() {

    const chartData = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      };

    return (
        <Chart options={chartData.options} series={chartData.series} type="bar" width={500} height={320} />
    );
}

export default SalesPerformanceChart;