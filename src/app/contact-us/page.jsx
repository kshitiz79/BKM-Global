"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'contact-page'
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for reaching out! We will get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: '',
        });
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

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9740633154"],
      action: "tel:+919740633154"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: ["support@bkmglobal.in"],
      action: "mailto:support@bkmglobal.in"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      details: [
        "408, Cita Building, 1st floor, 1st C Main,",
        "Koramangala 7th Block, Bangalore-560 095,",
        "Karnataka, India"
      ]
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    "Investment Management",
    "Market Alerts",
    "UpLearn Program",
    "Algo Trading Software",
    "Portfolio Management",
    "Risk Assessment",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">BKM Global</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your trading journey? Our expert team is here to help you achieve your financial goals with personalized solutions and professional guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {info.action ? (
                        <a href={info.action} className="hover:text-blue-600 transition-colors duration-300">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    rows={5}
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose BKM Global?</h3>
                <div className="space-y-4">
                  {[
                    "15+ years of trading expertise",
                    "Personalized investment strategies",
                    "24/7 customer support",
                    "Proven track record of success",
                    "Advanced trading technology",
                    "Comprehensive risk management"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6 opacity-90">
                  Follow us on social media for the latest market insights and updates.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/919740633154"
                    className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/BKM-Global/61561378508716"
                    className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/bkmglobal24"
                    className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-green-50 rounded-3xl shadow-lg p-8 border border-green-100">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Quick Response Guarantee</h3>
                <p className="text-green-700">
                  We understand that time is crucial in trading. Our team commits to responding to all inquiries within 24 hours, with urgent matters addressed within 2 hours during business hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - you can add Google Maps integration here) */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className=" text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p className="text-gray-600 mb-8">
            Located in the heart of Bangalore's tech hub, Electronic City Phase 1
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.30224653803!2d77.63505434042516!3d12.841858899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6cde204c3f9b%3A0x49cf9469a92db66e!2sElectronic%20City%20Phase%201%2C%20Bengaluru%2C%20Karnataka%20560100%2C%20India!5e0!3m2!1sen!2sin!4v1721643810217!5m2!1sen!2sin"
                width="100%"
                height="60%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;