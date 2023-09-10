import React from "react";
import { ChartJs } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const info = [
  { id: "Sales", value: 500 },
  { id: "Purchases", value: 1500 },
];

const data = {
  datasets: [
    {
      data: info.map((item) => item.value),
      backgroundColor: ["rgb(168 85 247)", "rgb(252 211 77)"],
    },
  ],
};

const PieChart = () => {
  return (
    <div className="w-72 h-72">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
