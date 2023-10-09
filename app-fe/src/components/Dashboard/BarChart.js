"use client";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ name, data }) {
  const [charOptions, setCharOptions] = useState({});
  let labels = [];
  let datos = [];

  if (data) {
    labels = data.map((item) => item.nombrePersona);
    datos = data.map((item) => item.countBitacoras);
  }

  const [charData, setCharData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const delayedUpdate = setTimeout(() => {
      setCharData({
        labels: labels,
        datasets: [
          {
            label: name,
            data: datos,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: [
              "rgb(53, 162, 235, 0.4)",
              "rgb(53, 16, 235, 0.4)",
              "rgb(53, 140, 235, 0.4)",
            ],
          },
        ],
      });
      setCharOptions({
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Dayli Revenue",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      });
    }, 1000);

    return () => clearTimeout(delayedUpdate);
  }, [data]);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg">
        <Bar options={charOptions} data={charData} />
      </div>
    </>
  );
}

export default BarChart;
