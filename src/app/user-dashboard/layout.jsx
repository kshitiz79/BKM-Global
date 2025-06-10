
"use client";
import React from 'react';

import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-blue-800">Adverta</h1>
        </div>
       <nav className="mt-4">
  <ul>
    <li className="p-4 hover:bg-gray-100 flex items-center">
      <Link href="/admin-dashboard" className="flex items-center w-full">
        <span className="mr-2">📊</span> Dashboard
      </Link>
    </li>
    <li className="p-4 hover:bg-gray-100 flex items-center">
      <Link href="/admin-dashboard/all-user" className="flex items-center w-full">
        <span className="mr-2">👤</span> User Profile
      </Link>
    </li>
    <li className="p-4 hover:bg-gray-100 flex items-center">
      <Link href="/admin-dashboard/create-user" className="flex items-center w-full">
        <span className="mr-2">➕</span> Add Ticket
      </Link>
    </li>
    <li className="p-4 hover:bg-gray-100 flex items-center">
      <Link href="/admin-dashboard/manage-user-fund" className="flex items-center w-full">
        <span className="mr-2">💰</span> View Funds
      </Link>
    </li>
    <li className="p-4 hover:bg-gray-100 flex items-center">
      <Link href="/admin-dashboard/all-tickets" className="flex items-center w-full">
        <span className="mr-2">🎫</span> View Ticket
      </Link>
    </li>
  </ul>
</nav>

      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;