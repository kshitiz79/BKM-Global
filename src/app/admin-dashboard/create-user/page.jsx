
"use client";
import React, { useState } from 'react';

const CreateUser = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    address: '',
    nationality: '',
    idNumber: '',
    initialDeposit: '',
    riskAcknowledgment: false,
  });

  // State for file uploads
  const [idFile, setIdFile] = useState(null);
  const [addressFile, setAddressFile] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle file uploads
  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.riskAcknowledgment) {
      alert('Please acknowledge the risks of forex trading.');
      return;
    }
    // Add logic to submit form data (e.g., API call)
    console.log('Form Data:', { ...formData, idFile, addressFile });
    alert('User created successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-800">Create User</h2>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Nationality *</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Government-Issued ID Number */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Government-Issued ID Number *</label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Proof of Identity Upload */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Proof of Identity (Upload) *</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setIdFile)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Proof of Address Upload */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Proof of Address (Upload) *</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setAddressFile)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Initial Deposit Amount */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Initial Deposit Amount ($) *</label>
            <input
              type="number"
              name="initialDeposit"
              value={formData.initialDeposit}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Risk Acknowledgment */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="riskAcknowledgment"
              checked={formData.riskAcknowledgment}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label className="ml-2 text-blue-800">
              I acknowledge the risks of forex trading *
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;