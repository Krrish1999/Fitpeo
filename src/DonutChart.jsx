import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [75, 25]; 

    const total = data.reduce((acc, value) => acc + value, 0);
    const percentage = ((data[0] / total) * 100).toFixed(2);

    const chart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Product Buy', 'Other Data'],
        datasets: [
          {
          
            hoverOffset:4,
            data: data,
            backgroundColor: ['rgb(90,50,234)', 'rgba(255, 99, 132, 0.7)'],
            borderColor: ['rgb(90,50,234)'],
          },
        ],
      },
      options: {
        
        cutout: '70%',
        plugins: {
         
          title:{
          
            display: true,
            text:"Customers",
            align:"start",
            font:{
              weight:"bold",
              size:15,
              
            },
          },
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
        
          },
        },
        elements:{
          center:{
            text:"red",
          }
        }
      },
    });
   

    const containerSize = Math.min(chartRef.current.parentNode.clientWidth, chartRef.current.parentNode.clientHeight);

  
    chartRef.current.width = containerSize;
    chartRef.current.height = containerSize;

   
    chart.ctx.textAlign = 'center';
    chart.ctx.textBaseline = 'middle';
    chart.ctx.font = '20px Arial';
    chart.ctx.fillStyle = 'rgb(0,0,0)';
    chart.ctx.fillText(`${percentage}%`, containerSize / 2, containerSize / 2);

    return () => {
      chart.destroy(); 
    };
  }, []);

  return (
    <div className=" w-3/7 items-center p-2 bg-white  ml-12  rounded-lg shadow-md">
  
        <canvas ref={chartRef} className='w-1/10 pt-2' />
  
    </div>
  );
};

export default DonutChart;
