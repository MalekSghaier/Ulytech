import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export default api;

const API_URL = 'http://localhost:5000/api';

export const authAPI = {

  register: async (nom, email, mot_de_passe) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, mot_de_passe }),
    });
    return res.json();
  },

  login: async (email, mot_de_passe) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, mot_de_passe }),
    });
    return res.json();
  },

  getProfile: async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

};

export const isLoggedIn = () => !!localStorage.getItem('token');
export const logout = () => localStorage.removeItem('token');