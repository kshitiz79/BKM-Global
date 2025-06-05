"use client";

import React from 'react';

// Sample JSON data
const usersData = [
  {
    name: "John Doe",
    number: "+1-555-123-4567",
    email: "john.doe@example.com",
    totalInvested: 5000,
    profit: 750,
    status: "Active"
  },
  {
    name: "Sarah Smith",
    number: "+1-555-987-6543",
    email: "sarah.smith@example.com",
    total投Invested: 3000,
    profit: -200,
    status: "Inactive"
  },
  {
    name: "Michael Brown",
    number: "+1-555-456-7890",
    email: "michael.brown@example.com",
    totalInvested: 10000,
    profit: 1500,
    status: "Active"
  },
  {
    name: "Emily Davis",
    number: "+1-555-321-6547",
    email: "emily.davis@example.com",
    totalInvested: 2000,
    profit: 300,
    status: "Active"
  }
];

const AllUsers = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-800">All Users</h2>
        
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-blue-800 font-semibold">Name</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Number</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Email</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Total Invested</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Profit</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.number}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">${user.totalInvested}</td>
                <td className={`py-3 px-4 ${user.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {user.profit >= 0 ? '+' : ''}${user.profit.toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;