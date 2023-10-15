import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Bar = () => {
  const chartRef = useRef(null);

  useEffect(() => {
   
    const data = [12, 10, 5, 20, 15, 3, 6, 16, 2, 6, 8, 8];

    const maxDataValue = Math.max(...data);

    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            barThickness: 40,
            barPercentage: 0,
            data: data,
            backgroundColor: data.map((value) =>
              value === maxDataValue ? "rgb(90,50,234)" : "rgb(242,238,254)"
            ),
            borderColor: data.map((value) =>
              value === maxDataValue ? "rgb(242,238,254)" : "rgb(242,238,254)"
            ),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false, 
          },
          x: {
            ticks: {
              display: true, 
            },
            grid: {
              display: false,
            },
          },
        },
        elements: {
          bar: {
            borderRadius: 10, 
          },
        },
      },
    });

    return () => {
      chart.destroy(); 
    };
  }, []);

  return (
    <div className="bg-white w-3/6 h-50 p-4 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between"> 
        <div>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p>Mothly Earnings</p>
        </div>

        <p>
          Quaterly <KeyboardArrowDownIcon />
        </p>
      </div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Bar;
