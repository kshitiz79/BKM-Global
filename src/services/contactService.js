import { api } from '../lib/api';

// Contact form validation
export const validateContactForm = (formData) => {
  const errors = [];
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (formData.name && !/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
    errors.push({ field: 'name', message: 'Name can only contain letters and spaces' });
  }
  
  // Email validation
  if (!formData.email) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
    errors.push({ field: 'email', message: 'Please provide a valid email address' });
  }
  
  // Phone validation
  if (!formData.phone) {
    errors.push({ field: 'phone', message: 'Phone number is required' });
  } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
    errors.push({ field: 'phone', message: 'Please provide a valid phone number' });
  }
  
  // Subject validation
  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.push({ field: 'subject', message: 'Subject must be at least 5 characters' });
  }
  if (formData.subject && formData.subject.trim().length > 200) {
    errors.push({ field: 'subject', message: 'Subject cannot exceed 200 characters' });
  }
  
  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }
  if (formData.message && formData.message.trim().length > 1000) {
    errors.push({ field: 'message', message: 'Message cannot exceed 1000 characters' });
  }
  
  // Service validation (optional)
  const validServices = [
    'Investment Management',
    'Market Alerts',
    'UpLearn Program',
    'Algo Trading Software',
    'Portfolio Management',
    'Risk Assessment',
    'Other',
    ''
  ];
  if (formData.service && !validServices.includes(formData.service)) {
    errors.push({ field: 'service', message: 'Invalid service selection' });
  }
  
  return errors;
};

// Submit contact form
export const submitContactForm = async (formData) => {
  try {
    // Client-side validation
    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      throw new Error('Validation failed', { cause: validationErrors });
    }
    
    // Clean phone number (remove spaces, keep + and digits)
    const cleanedData = {
      ...formData,
      phone: formData.phone.replace(/\s/g, ''),
      source: formData.source || 'contact-page'
    };
    
    const response = await api.contact.submit(cleanedData);
    return response.data;
    
  } catch (error) {
    // Handle validation errors
    if (error.cause) {
      throw error;
    }
    
    // Handle API errors
    if (error.response?.data) {
      throw new Error(error.response.data.message || 'Failed to submit contact form', {
        cause: error.response.data.errors || []
      });
    }
    
    // Handle network errors
    throw new Error('Network error. Please check your connection and try again.');
  }
};

// Get all contacts (admin only)
export const getAllContacts = async (params = {}) => {
  try {
    const response = await api.contact.getAll(params);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch contacts');
  }
};

// Get contact by ID
export const getContactById = async (id) => {
  try {
    const response = await api.contact.getById(id);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch contact');
  }
};

// Update contact status
export const updateContactStatus = async (id, status) => {
  try {
    const response = await api.contact.updateStatus(id, status);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update contact status');
  }
};