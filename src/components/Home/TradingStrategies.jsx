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
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.3,
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
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.3,
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
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.3,
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
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.3,
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
        grid: { color: "#374151" },
        ticks: { color: "#d1d5db" },
      },
      x: {
        grid: { color: "#374151" },
        ticks: { color: "#d1d5db" },
      },
    },
    plugins: { legend: { display: false } },
  };

  const strategies = [
    {
      title: "Day Trading",
      description:
        "Day trading involves making multiple trades within a single day to capitalize on short-term market movements.",
      chartData: dayTradingData,
    },
    {
      title: "Swing Trading",
      description:
        "Swing trading focuses on capturing gains over a period of days or weeks by analyzing market cycles and price swings.",
      chartData: swingTradingData,
    },
    {
      title: "Position Trading",
      description:
        "Position trading is a long-term approach, holding trades for weeks or years, relying on fundamental analysis and market trends.",
      chartData: positionTradingData,
    },
    {
      title: "Scalping",
      description:
        "Scalping involves making numerous small trades throughout the day to profit from minor price changes with disciplined focus.",
      chartData: scalpingData,
    },
  ];

  return (
    <div className="relative bg-white text-black py-16">
      <h1 className="md:text-5xl text-4xl text-center mb-8 uppercase">
        Trading Strategies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl px-8 mx-auto gap-6 p-4">
        {strategies.map((strategy, i) => (
          <motion.div
            key={strategy.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {strategy.title}
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              {strategy.description}
            </p>
            <div className="relative h-40">
              <Line data={strategy.chartData} options={options} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
