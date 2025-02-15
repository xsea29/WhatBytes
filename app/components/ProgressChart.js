"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = ({ score, total, rotationAngle = -200 }) => {
  const data = {
    datasets: [
      {
        data: [score, total - score],
        backgroundColor: ["#4F83F6", "#E5E7EB"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    rotation: rotationAngle,
    circumference: 360,
  };

  return (
    <div className="relative w-44 h-44">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center text-4xl">
        <Image
          src="/images/target-logo.png"
          width={60}
          height={60}
          alt="Target Icon"
        />
      </div>
    </div>
  );
};

export default ProgressChart;
