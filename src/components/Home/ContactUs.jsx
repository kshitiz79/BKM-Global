'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative bg-white py-10 ">
        <div className='max-w-7xl mx-auto '>
      {/* Single Grid for All Three Sections */}

      <h1 className="text-5xl uppercase text-center mb-10 text-black">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Form Section */}
        <div className=" shadow-2xl rounded-xl py-8 px-8 transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-300 group">
  <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-wide bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-blue">
    Get in Touch
  </h2>
  
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Name Input with Icon */}
    <div className="relative">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
        onChange={handleChange}
      />
      <svg className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>

    {/* Email Input with Icon */}
    <div className="relative">
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
        onChange={handleChange}
      />
      <svg className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>

    {/* Phone Input with Icon */}
    <div className="relative">
      <input
        type="tel"
        name="number"
        placeholder="Your Phone Number"
        className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
        onChange={handleChange}
      />
      <svg className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>

    {/* Message Textarea with Icon */}
    <div className="relative">
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-xl placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none h-24 resize-none transition-all"
        onChange={handleChange}
      ></textarea>
      <svg className="w-6 h-6 absolute left-3 top-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>

    {/* Submit Button with Animation */}
    <button
      type="submit"
      className="w-full bg-blue-900 text-white py-3  px-6 rounded-xl hover:from-blue-900 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
    >
      <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
      Send Message
    </button>

    {/* Alternative Contact Options */}
  
  </form>
</div>

        {/* Office Details Section */}
        {[


  {
    title: 'Our Office Details',
    building: 'Cita Building',
    street: '1st floor,1st C Main , Koramangala 7th Block',
    locality: 'Bommasandra Industrial Estate',
    city: 'Bengalore',
    district: 'Bengaluru Urban',
    stateZip: 'Bangalore- 560 095 Karnataka',
    email: 'info@bkmglobal.in',
    website: 'www.bkmglobal.com',
    phone1: '+91 9740633154',
 
  },
].map((office, index) => (
  <div
    key={index}
    className=" shadow-2xl rounded-xl p-6 flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out max-w-sm mx-auto border border-blue-100 relative group"
  >
    {/* Floating Icon */}
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
      <svg className="w-16 h-16 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-blue mb-6 text-center uppercase tracking-wide bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent border-b-2 border-blue-100 pb-2">
        {office.title}
      </h3>
      <div className="space-y-3 text-gray-700">
        {/* Address Section with Icon */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="space-y-2">
              <p className="text-sm flex items-center gap-2">

                {office.street}
              </p>
            
              <p className="text-sm font-medium text-blue-800">{office.stateZip}</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-3 mt-4">
          <a href={`mailto:${office.email}`} className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-blue-900 hover:text-blue-800">{office.email}</span>
          </a>

       

          <div className="flex items-center gap-2 p-2">
            <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="flex flex-col">
              <a href={`tel:${office.phone1}`} className="text-blue-900 hover:text-blue-800">{office.phone1}</a>
              <a href={`tel:${office.phone2}`} className="text-blue-900 hover:text-blue-800">{office.phone2}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="grid grid-cols-2 gap-3 mb-1">
      <a href={`tel:${office.phone1}`} className="flex items-center justify-center gap-2 bg-blue-900 text-white px-4 py-3 rounded-xl hover:from-blue-900 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </a>
      
      <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        Message
      </button>
    </div>

    {/* Get Directions Button */}

  </div>
))}
        {/* Map Section */}
        <div className="bg-white shadow-xl rounded-lg py-8 px-8 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
  {/* Header Section */}
  <div className="flex items-center space-x-2 mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.88 3.549L7.12 3.55a2 2 0 00-1.99 2.01L5.13 18.45a2 2 0 002.01 1.99h9.76a2 2 0 001.99-1.99L18.87 5.56a2 2 0 00-1.99-2.01zM12 8v4m0 4h.01"
      />
    </svg>
    <h3 className="text-2xl uppercase font-semibold text-blue">
      Find Us Here
    </h3>
  </div>

  {/* Map Section */}
  <div className="w-full h-64 rounded-lg overflow-hidden shadow-md relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.285392927593!2d77.65768261482166!3d12.839843990936156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8e4e6f1d0d%3A0x7e8f1e7f7e7e7e7e!2sElectronic%20City%20Phase%201%2C%20Bengaluru%2C%20Karnataka%20560100%2C%20India!5e0!3m2!1sen!2sus!4v1630000000000"
      width="100%"
      height="100%"
      style={{ border: "none" }}
      allowFullScreen=""
      loading="lazy"
      title="Office Location"
    ></iframe>
    
  </div>

  {/* Footer Section */}
  <p className="text-gray-600 text-sm mt-4 text-center">
    Visit us at our office in Electronic City, Bengaluru!
  </p>

  <button className="absolute bottom-8  w-5/6 bg-blue-900 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
      Get Directions
    </button>
</div>



      </div>
    </div>
    </div>
  );
}