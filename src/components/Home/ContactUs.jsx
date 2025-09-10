'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://bkm-backed.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.number,
          subject: 'Contact from Home Page',
          message: formData.message,
          source: 'home-page'
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for reaching out! We will get back to you within 24 hours.');
        setFormData({ name: '', email: '', number: '', message: '' });
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      title: 'India Office',
      building: 'Cita Building',
      street: '408, 1st Floor, 1st C Main, Koramangala 7th Block',
      city: 'Bangalore',
      stateZip: 'Bangalore - 560095, Karnataka, India',
      email: 'support@bkmglobal.in',
      phone: '+91 9740633154',
    },
   
  ];

  return (
    <div className="relative bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="h1-blue-900 text-center mb-8 sm:mb-10 md:mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full">

          {/* Contact Form */}
          <div className="shadow-2xl rounded-2xl py-8 sm:py-10 px-6 sm:px-8 transform hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
            <h2 className="h2-blue-900 mb-6 sm:mb-8 text-center uppercase tracking-wide bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {['name', 'email', 'number', 'message'].map((field) => (
                <div className="relative" key={field}>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : field === 'number' ? 'tel' : 'text'}
                      name={field}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      className="form-input-blue-900 w-full"
                      onChange={handleChange}
                    />
                  ) : (
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="form-textarea-blue-900 w-full"
                      onChange={handleChange}
                    ></textarea>
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-blue-900 w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Office Section Cards */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="max-w-sm w-full bg-white shadow-xl rounded-2xl border border-blue-100 p-6 mx-auto blue-900-text font-sans">
                  <h2 className="text-lg sm:text-xl font-bold uppercase blue-900-text mb-4 border-b pb-2 border-blue-100 relative">
                    {office.title}
                    <span className="absolute right-0 top-0 opacity-10">
                      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 20h4v10H4V20H8v-6a8 8 0 0116 0v6h4v10H20V20h-4v-6a4 4 0 00-8 0v6z" />
                      </svg>
                    </span>
                  </h2>
                  <div className="flex items-start bg-blue-50 rounded-lg p-4 mb-4">
                    <MapPin className="w-5 h-5 mt-1 mr-3 blue-900-text" />
                    <div>
                      <p className="text-sm">{office.building}</p>
                      <p className="text-sm">{office.street}</p>
                      {office.area && <p className="text-sm">{office.area}</p>}
                      <p className="text-sm font-medium blue-800-text">{office.city}</p>
                      {office.stateZip && <p className="text-sm font-medium blue-800-text">{office.stateZip}</p>}
                    </div>
                  </div>
                  {office.email && (
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 mr-3 blue-900-text" />
                      <a href={`mailto:${office.email}`} className="text-sm blue-900-text hover:underline">
                        {office.email}
                      </a>
                    </div>
                  )}
                  {office.phone && (
                    <div className="flex items-center mb-6">
                      <Phone className="w-5 h-5 mr-3 blue-900-text" />
                      <a href={`tel:${office.phone}`} className="text-sm blue-900-text hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 mt-52">
                    {office.phone && (
                      <a
                        href={`tel:${office.phone.replace(/\D/g, '')}`}
                        className="btn-blue-900"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    )}
                    {office.email && (
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center justify-center gap-2 bg-[#1A3A8D] text-white text-sm font-medium px-4 py-3 rounded-xl hover:bg-blue-600 transition"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white shadow-xl rounded-2xl py-6 sm:py-8 px-6 sm:px-8 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="h3-blue-900 mb-4">Find Us Here</h3>
            <div className="w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-md relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2171775044056!2d77.62264807412218!3d12.935171087379098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1454d1b2b317%3A0xb4e0b61cb7ce1aa7!2s408%2C%20Cita%20Building%2C%201st%20Floor%2C%201st%20C%20Main%2C%207th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560095%2C%20India!5e0!3m2!1sen!2sin!4v1720504731390!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen=""
                loading="lazy"
                title="Head Office Location"
              ></iframe>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">
              Visit us at our head office in Koramangala, Bengaluru!
            </p>
            <a href="https://www.google.com/maps/place/Cita+building/@12.9350918,77.5716018,13z/data=!4m6!3m5!1s0x3bae15f26ddf5899:0xf1138ec27b8e0c77!8m2!3d12.935095!4d77.6128016!16s%2Fg%2F11t7ky79dg?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D">
              <button className="mt-16 btn-blue-900">
                Get Directions
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}