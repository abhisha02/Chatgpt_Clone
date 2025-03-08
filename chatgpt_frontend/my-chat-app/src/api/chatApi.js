import api from './axios';

export const chatApi = {
  getChats: async () => {
    const response = await api.get('chats/');
    return response.data;
  },
  
  sendMessage: async (message) => {
    const response = await api.post('chats/', { message });
    return response.data;
  },
  
  deleteChat: async (chatId) => {
    const response = await api.delete(`chats/${chatId}/`);
    return response.data;
  }
};