"use client"
import React, { useState } from 'react';

const page = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        {/* Left Section - Image */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Man on stairs"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-white">
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-sm text-gray-400 mb-6">
              Access your account or create a new one to get started.
            </p>

            {/* Tabs */}
            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab('login')}
                className={`w-1/2 py-2 text-center text-sm font-semibold ${
                  activeTab === 'login'
                    ? 'border-b-2 border-green-500 text-white'
                    : 'text-gray-400'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`w-1/2 py-2 text-center text-sm font-semibold ${
                  activeTab === 'signup'
                    ? 'border-b-2 border-green-500 text-white'
                    : 'text-gray-400'
                }`}
              >
                Signup
              </button>
            </div>

            {/* Form */}
            {activeTab === 'login' ? (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  login
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  Forgot your password?{' '}
                  <a href="#" className="text-green-500 hover:underline">
                    Reset it
                  </a>
                </p>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">
                    Full Name <span className="text-red-500">*</span
                    >
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Don Joe"
                    className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md bg-gray-700 border border-r-0 border-gray-600 text-gray-400">
                      🇮🇳
                    </span>
                    <input
                      type="text"
                      placeholder="0587685575"
                      className="w-full p-2 rounded-r-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  signup
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  By signing up, you agree to our{' '}
                  <a href="#" className="text-green-500 hover:underline">
                    Terms & Conditions
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default page;