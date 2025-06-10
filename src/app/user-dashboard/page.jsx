"use client";
import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  // Data for Donut Chart: User Status Distribution
  const userStatusData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [3, 1],
        backgroundColor: ['#FF6B6B', '#4ECDC4'],
        borderWidth: 0,
      },
    ],
  };

  const userStatusOptions = {
    cutout: '70%',
    plugins: {
      legend: { position: 'bottom' },
    },
  };

  // Data for Bar Chart: Monthly Deposits
  const monthlyDepositsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Deposits ($)',
        data: [2000, 3000, 1500, 2500, 4000, 1000],
        backgroundColor: '#FF6B6B',
        borderRadius: 5,
      },
    ],
  };

  const monthlyDepositsOptions = {
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
    plugins: {
      legend: { display: false },
    },
  };

  // Data for Line Graph: Total Funds Invested Over Time
  const fundsInvestedData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Funds Invested ($)',
        data: [5000, 8000, 10000, 15000, 20000, 23000],
        borderColor: '#4ECDC4',
        backgroundColor: 'rgba(78, 205, 196, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const fundsInvestedOptions = {
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-800">Dashboard Admin</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type for keyword..."
              className="p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5">🔍</span>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">4</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold">Total Funds Invested</h3>
          <p className="text-3xl font-bold">$23,000</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold">Active Tickets</h3>
          <p className="text-3xl font-bold">2</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Donut Chart: User Status Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">User Status Distribution</h3>
          <div className="relative h-48">
            <Doughnut data={userStatusData} options={userStatusOptions} />
          </div>
          <p className="text-center text-blue-800 font-semibold mt-4">75% Active</p>
        </div>

        {/* Progress Circles */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Key Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="text-blue-500"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 11.291 4.691 a 15.9155 15.9155 0 0 1 4.691 11.291"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="80 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-blue-800 font-semibold">80%</span>
                </div>
              </div>
              <p className="text-blue-800 mt-2">Deposit Completion</p>
            </div>
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="text-blue-500"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 11.291 4.691 a 15.9155 15.9155 0 0 1 4.691 11.291"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="75 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-blue-800 font-semibold">75%</span>
                </div>
              </div>
              <p className="text-blue-800 mt-2">Withdrawal Completion</p>
            </div>
            <div className="text-center col-span-2">
              <p className="text-blue-800 font-semibold">$587.50</p>
              <p className="text-blue-800">Avg. Profit/Loss</p>
            </div>
          </div>
        </div>

        {/* Bar Chart: Monthly Deposits */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Monthly Deposits</h3>
          <div className="relative h-48">
            <Bar data={monthlyDepositsData} options={monthlyDepositsOptions} />
          </div>
        </div>
      </div>

      {/* Line Graph and Ticket Categories */}
      <div className="grid grid-cols-3 gap-6">
        {/* Line Graph: Total Funds Invested Over Time */}
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Total Funds Invested Over Time</h3>
          <div className="relative h-48">
            <Line data={fundsInvestedData} options={fundsInvestedOptions} />
          </div>
        </div>

        {/* Ticket Categories */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Ticket Categories</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">💰</span>
                <span>Deposit Issues</span>
              </div>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">2</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">🏦</span>
                <span>Withdrawal Issues</span>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">1</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">👤</span>
                <span>Account Issues</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;