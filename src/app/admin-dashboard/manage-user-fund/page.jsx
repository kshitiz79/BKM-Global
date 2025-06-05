
"use client";
import React, { useState } from 'react';

// Sample data
const usersData = [
  {
    name: "John Doe",
    totalInvested: 5000,
    currentAmount: 5250,
    lastDeposit: { amount: 1000, date: "2025-05-15" },
    lastWithdrawal: { amount: 500, date: "2025-05-20" },
    lastMonthProfitLoss: 250
  },
  {
    name: "Sarah Smith",
    totalInvested: 3000,
    currentAmount: 2800,
    lastDeposit: { amount: 500, date: "2025-05-10" },
    lastWithdrawal: { amount: 200, date: "2025-05-18" },
    lastMonthProfitLoss: -200
  },
  {
    name: "Michael Brown",
    totalInvested: 10000,
    currentAmount: 11500,
    lastDeposit: { amount: 2000, date: "2025-05-12" },
    lastWithdrawal: { amount: 0, date: "N/A" },
    lastMonthProfitLoss: 1500
  }
];

const ManageUserFunds = () => {
  // State for managing the update modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [newAmount, setNewAmount] = useState('');

  // Function to open the update modal
  const openUpdateModal = (user) => {
    setSelectedUser(user);
    setNewAmount(user.currentAmount.toString());
  };

  // Function to close the update modal
  const closeUpdateModal = () => {
    setSelectedUser(null);
    setNewAmount('');
  };

  // Function to handle amount update
  const handleUpdateAmount = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call to update the user's amount
    console.log(`Updating ${selectedUser.name}'s amount to ${newAmount}`);
    alert(`Updated ${selectedUser.name}'s amount to $${newAmount}`);
    closeUpdateModal();
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-800">Manage User Funds</h2>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-blue-800 font-semibold">Name</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Total Invested</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Current Amount</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Last Deposit</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Last Withdrawal</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Last Month Profit/Loss</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">${user.totalInvested.toLocaleString()}</td>
                <td className="py-3 px-4">${user.currentAmount.toLocaleString()}</td>
                <td className="py-3 px-4">
                  ${user.lastDeposit.amount.toLocaleString()} ({user.lastDeposit.date})
                </td>
                <td className="py-3 px-4">
                  {user.lastWithdrawal.amount > 0
                    ? `$${user.lastWithdrawal.amount.toLocaleString()} (${user.lastWithdrawal.date})`
                    : 'N/A'}
                </td>
                <td className={`py-3 px-4 ${user.lastMonthProfitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {user.lastMonthProfitLoss >= 0 ? '+' : ''}${user.lastMonthProfitLoss.toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => openUpdateModal(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                  >
                    Update Amount
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Amount Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Update Amount for {selectedUser.name}
            </h3>
            <form onSubmit={handleUpdateAmount} className="space-y-4">
              <div>
                <label className="block text-blue-800 font-semibold mb-2">New Amount ($)</label>
                <input
                  type="number"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeUpdateModal}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUserFunds;