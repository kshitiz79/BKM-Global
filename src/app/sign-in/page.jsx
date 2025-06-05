"use client"
import React, { useState } from 'react';

const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would authenticate the user via an API
    console.log('Login Form Data:', formData);
    alert('Login successful!');
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        {/* Left Section - Image */}
       
        {/* Right Section - Login Form */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-white">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <p className="text-sm text-gray-400 mb-6">
              Access your account to manage your forex trading activities.
            </p>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Login
              </button>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Forgot your password?{' '}
                <a href="#" className="text-green-500 hover:underline">
                  Reset it
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;