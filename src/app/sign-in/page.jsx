"use client";
import React, { useState } from "react";
import { login } from "@/utils/api"; // ✅ import login function

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // Optional feedback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData); // 🔥 call backend API
      console.log("Login successful:", res);

      // If JWT token is returned
      if (res.token) {
        localStorage.setItem("token", res.token); // Optional: store token
      }

      setMessage("Login successful!");
      // Optionally redirect to dashboard
      // router.push("/dashboard"); (if using next/router)
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-white">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <p className="text-sm text-gray-400 mb-6">
              Access your account to manage your forex trading activities.
            </p>

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

              {message && (
                <p className="text-center text-sm mt-4 text-gray-300">{message}</p>
              )}

              <p className="text-xs text-gray-400 mt-4 text-center">
                Forgot your password?{" "}
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
