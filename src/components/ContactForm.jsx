import { useState } from 'react';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = () => {
  const { submitForm, isLoading, errors, success, getFieldError, hasFieldError } = useContactForm();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    source: 'contact-page'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitForm(formData);
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
        source: 'contact-page'
      });
    } catch (error) {
      // Errors are handled by the hook
      console.error('Form submission failed:', error.message);
    }
  };

  const serviceOptions = [
    { value: '', label: 'Select a service (optional)' },
    { value: 'Investment Management', label: 'Investment Management' },
    { value: 'Market Alerts', label: 'Market Alerts' },
    { value: 'UpLearn Program', label: 'UpLearn Program' },
    { value: 'Algo Trading Software', label: 'Algo Trading Software' },
    { value: 'Portfolio Management', label: 'Portfolio Management' },
    { value: 'Risk Assessment', label: 'Risk Assessment' },
    { value: 'Other', label: 'Other' }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you for contacting us! We will get back to you within 24 hours.
        </div>
      )}

      {errors.find(e => e.field === 'general') && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errors.find(e => e.field === 'general').message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasFieldError('name') ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {hasFieldError('name') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('name')}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasFieldError('email') ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
          {hasFieldError('email') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('email')}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasFieldError('phone') ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your phone number"
          />
          {hasFieldError('phone') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('phone')}</p>
          )}
        </div>

        {/* Service Field */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasFieldError('service') ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {hasFieldError('service') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('service')}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasFieldError('subject') ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter the subject"
          />
          {hasFieldError('subject') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('subject')}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasFieldError('message') ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your message"
          />
          {hasFieldError('message') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('message')}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
          } text-white`}
        >
          {isLoading ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;