"use client";

import React from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function TradingStrategyCards() {
  const dayTradingData = {
    labels: ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"],
    datasets: [
      {
        label: "Performance",
        data: [10, 30, 25, 40, 20, 50, 60, 70],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const swingTradingData = {
    labels: [
      "Mon (W1)",
      "Tue (W1)",
      "Wed (W1)",
      "Thu (W1)",
      "Fri (W1)",
      "Mon (W2)",
      "Tue (W2)",
      "Wed (W2)",
      "Thu (W2)",
      "Fri (W2)",
    ],
    datasets: [
      {
        label: "Performance",
        data: [10, 20, 30, 25, 35, 45, 40, 55, 60, 65],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const positionTradingData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Performance",
        data: [10, 30, 50, 80, 140, 200],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const scalpingData = {
    labels: ["10:00", "10:05", "10:10", "10:15", "10:20", "10:25"],
    datasets: [
      {
        label: "Performance",
        data: [10, 12, 8, 15, 20, 18],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#e5e7eb" },
        ticks: { color: "#111827", font: { size: 12, weight: "500" } },
      },
      x: {
        grid: { color: "#e5e7eb" },
        ticks: { color: "#111827", font: { size: 12, weight: "500" } },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#e5e7eb",
        borderWidth: 1,
      },
    },
  };

  const strategies = [
    
    {
      title: "Scalping",
      description:
        "Scalping involves making numerous small trades throughout the day to profit from minor price changes with disciplined focus.",
      chartData: scalpingData,
      color: "#ef4444",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 text-black py-20">
      <h1 className="md:text-5xl text-4xl text-center font-bold text-gray-900 mb-12 tracking-tight">
        Explore Trading Strategies
      </h1>
      <div className="grid grid-cols-1 max-w-7xl px-8 mx-auto gap-8 p-4">
        {strategies.map((strategy, i) => (
          <motion.div
            key={strategy.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {strategy.title}
            </h2>
            <p className="text-gray-700 text-base mb-4 leading-relaxed">
              {strategy.description}
            </p>
            <div className="relative h-78 mb-4">
              <Line data={strategy.chartData} options={options} />
            </div>
           
          </motion.div>
        ))}
      </div>
    </div>
  );
}