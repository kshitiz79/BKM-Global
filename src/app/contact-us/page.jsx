"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Assuming Next.js for image optimization
import { motion } from 'framer-motion'; // For animations

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      budget: '',
      location: '',
      message: '',
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6">
        {/* Left Section - Image Card */}
      <motion.div
            className="bg-gray-800 rounded-xl shadow-2xl p-6 text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="text-sm text-gray-400 space-y-4">
              <p>
                <span className="font-semibold text-white">Address:</span><br />
                408, Cita Building, 1st floor, 1st C Main,<br />
                Koramangala 7th Block, Bangalore-560 095,<br />
                Karnataka, India.
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:info@bkmglobal.in" className="text-green-500 hover:underline">
                  info@bkmglobal.in
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>{' '}
                <a href="tel:+918431891335" className="text-green-500 hover:underline">
                  +91 9740633154
                </a>
              </p>
            </div>
          </motion.div>

        

        {/* Right Section - Form and Details Cards */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <motion.div
            className="bg-gray-800 rounded-xl shadow-2xl p-6 text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-sm text-gray-400 mb-6">
              Fill out the form below, and we’ll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Don Joe"
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex">

                <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 9876543210"
  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
  required
/>

                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Budget <span className="text-red-500">*</span></label>
                <textarea
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Your budget..."
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={1}
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Location <span className="text-red-500">*</span></label>
                <textarea
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your address..."
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={2}
                  required
                />
              </div>

             

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;