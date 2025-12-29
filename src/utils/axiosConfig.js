import axios from "axios";
import { BASE_API_URL } from "./constante";

const api = axios.create({
  baseURL: BASE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    // const token = window.localStorage.getItem('token');
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour rafraîchir automatiquement le token
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      if(typeof window !== 'undefined') {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
          const response = await axios.post('http://localhost:8000/api/auth/refresh', { refreshToken });
          
          if(response.data.token) {
            const newToken = response.data.token;
            localStorage.setItem('token', newToken);
            originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
            
            // Synchroniser le nouveau token avec les autres services
            window.postMessage({
              type: 'TOKEN_UPDATE',
              token: newToken,
              refreshToken: refreshToken,
            }, '*');
          }
          
          return api(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          window.location = '/';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;