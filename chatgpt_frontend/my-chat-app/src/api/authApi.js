import api from './axios';
import { setTokens, removeTokens } from '../utils/cookies';

export const authApi = {
  register: async (userData) => {
    const response = await api.post('register/', userData);
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await api.post('login/', credentials);
    const { access, refresh, user } = response.data;
    setTokens(access, refresh);
    return { user };
  },
  
  logout: async (refreshToken) => {
    try {
      await api.post('logout/', { refresh: refreshToken });
      removeTokens();
    } catch (error) {
      console.error('Logout error', error);
      // Still remove tokens even if server logout fails
      removeTokens();
    }
  }
};