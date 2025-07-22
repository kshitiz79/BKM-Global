import axios from 'axios';
import API_CONFIG, { buildUrl } from '../config/api';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log('API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data
      });
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log('API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data
      });
    }
    
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      // Redirect to login if needed
      // window.location.href = '/login';
    }
    
    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', {
        status: error.response?.status,
        url: error.config?.url,
        message: error.response?.data?.message || error.message
      });
    }
    
    return Promise.reject(error);
  }
);

// API methods
export const api = {
  // Generic methods
  get: (url, config = {}) => apiClient.get(url, config),
  post: (url, data = {}, config = {}) => apiClient.post(url, data, config),
  put: (url, data = {}, config = {}) => apiClient.put(url, data, config),
  patch: (url, data = {}, config = {}) => apiClient.patch(url, data, config),
  delete: (url, config = {}) => apiClient.delete(url, config),
  
  // Contact API methods
  contact: {
    // Submit contact form
    submit: (data) => apiClient.post(API_CONFIG.ENDPOINTS.CONTACT, data),
    
    // Get all contacts (admin)
    getAll: (params = {}) => apiClient.get(API_CONFIG.ENDPOINTS.CONTACT, { params }),
    
    // Get contact by ID
    getById: (id) => apiClient.get(API_CONFIG.ENDPOINTS.CONTACT_BY_ID(id)),
    
    // Update contact status
    updateStatus: (id, status) => 
      apiClient.put(API_CONFIG.ENDPOINTS.CONTACT_STATUS(id), { status }),
  }
};

export default apiClient;