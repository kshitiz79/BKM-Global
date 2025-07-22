// API Configuration
const API_CONFIG = {
  // Base URLs
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000',
  
  // API Endpoints
  ENDPOINTS: {
    // Contact endpoints
    CONTACT: '/contact',
    CONTACT_BY_ID: (id) => `/contact/${id}`,
    CONTACT_STATUS: (id) => `/contact/${id}/status`,
    
    // Add other endpoints as needed
    // AUTH: '/auth',
    // USERS: '/users',
    // DASHBOARD: '/dashboard',
  },
  
  // Request timeout
  TIMEOUT: 10000,
  
  // Default headers
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

// Helper function to build full URL
export const buildUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function to get full endpoint URLs
export const getEndpoint = (key, ...params) => {
  const endpoint = typeof API_CONFIG.ENDPOINTS[key] === 'function' 
    ? API_CONFIG.ENDPOINTS[key](...params)
    : API_CONFIG.ENDPOINTS[key];
  
  return buildUrl(endpoint);
};

export default API_CONFIG;