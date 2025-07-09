// utils/api.js (optional file to manage API calls)
import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // your backend URL

export const signup = async (userData) => {
  const res = await axios.post(`${API_BASE_URL}/api/signup`, userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post(`${API_BASE_URL}/api/login`, userData);
  return res.data;
};
