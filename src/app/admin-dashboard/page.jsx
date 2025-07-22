"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
import { FaEnvelope, FaUsers, FaChartLine, FaTicketAlt } from 'react-icons/fa';

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
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/contact?limit=100');
      const result = await response.json();
      if (result.success) {
        setContacts(result.data);
      }
    } catch (error) {
      console.error('Fetch contacts error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate contact stats
  const contactStats = {
    total: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    inProgress: contacts.filter(c => c.status === 'in-progress').length,
    resolved: contacts.filter(c => c.status === 'resolved').length,
    fromHome: contacts.filter(c => c.source === 'home-page').length,
    fromContact: contacts.filter(c => c.source === 'contact-page').length,
  };
  // Data for Donut Chart: Contact Status Distribution
  const contactStatusData = {
    labels: ['New', 'In Progress', 'Resolved', 'Closed'],
    datasets: [
      {
        data: [
          contactStats.new,
          contactStats.inProgress,
          contactStats.resolved,
          contacts.filter(c => c.status === 'closed').length
        ],
        backgroundColor: ['#3B82F6', '#F59E0B', '#10B981', '#6B7280'],
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
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Contacts</h3>
              <p className="text-3xl font-bold">{contactStats.total}</p>
            </div>
            <FaEnvelope className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">New Inquiries</h3>
              <p className="text-3xl font-bold">{contactStats.new}</p>
            </div>
            <FaTicketAlt className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Resolved</h3>
              <p className="text-3xl font-bold">{contactStats.resolved}</p>
            </div>
            <FaChartLine className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">From Home Page</h3>
              <p className="text-3xl font-bold">{contactStats.fromHome}</p>
            </div>
            <FaUsers className="w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Donut Chart: Contact Status Distribution */}
 

        {/* Progress Circles */}
       

        {/* Bar Chart: Monthly Deposits */}
       
      </div>

      {/* Line Graph and Ticket Categories */}
      <div className="grid grid-cols-3 gap-6">
        {/* Line Graph: Total Funds Invested Over Time */}
       

        {/* Contact Sources */}
      
      </div>
    </div>
  );
};

export default Dashboard;