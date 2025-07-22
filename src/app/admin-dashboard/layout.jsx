
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [adminEmail, setAdminEmail] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  // No need to skip layout since login is now at /admin

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const email = localStorage.getItem('adminEmail');
    
    if (!token) {
      router.push('/admin');
      return;
    }
    
    setAdminEmail(email || 'Admin');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    router.push('/admin');
  };

  const isActive = (path) => {
    return pathname === path ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700 hover:bg-gray-50';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-800">BKM Global</h1>
          <p className="text-sm text-gray-600 mt-1">Admin Dashboard</p>
        </div>
        
        <nav className="mt-6">
          <ul className="space-y-1">
            <li>
              <Link 
                href="/admin-dashboard" 
                className={`flex items-center px-6 py-3 transition-colors ${isActive('/admin-dashboard')}`}
              >
                <span className="mr-3">📊</span> Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/admin-dashboard/contacts" 
                className={`flex items-center px-6 py-3 transition-colors ${isActive('/admin-dashboard/contacts')}`}
              >
                <span className="mr-3">📧</span> Contact Forms
              </Link>
            </li>
            
           
          </ul>
        </nav>

        {/* Admin Profile & Logout */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUser className="w-4 h-4 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{adminEmail}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <FaSignOutAlt className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;