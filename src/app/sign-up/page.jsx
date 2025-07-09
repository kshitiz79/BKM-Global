"use client";
import React, { useState } from "react";
import { signup } from "@/utils/api"; // ✅ import your API

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

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
      const res = await signup(formData); // 🔥 API call
      console.log("Signup Success:", res);
      setMessage("Signup successful!");

      setFormData({ name: "", email: "", password: "" });

      // Optional: redirect or store token
      // localStorage.setItem("token", res.token);
      // router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      setMessage("Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-white">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <p className="text-sm text-gray-400 mb-6">
              Create your account to start managing your forex portfolio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

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
                Sign Up
              </button>

              {message && (
                <p className="text-center text-sm mt-4 text-gray-300">{message}</p>
              )}

              <p className="text-xs text-gray-400 mt-4 text-center">
                Already have an account?{" "}
                <a href="/login" className="text-green-500 hover:underline">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
