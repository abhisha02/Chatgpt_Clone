import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats, deleteChat } from '../../store/slices/chatSlice';

const ChatList = () => {
  const dispatch = useDispatch();
  const { chats, loading, error } = useSelector(state => state.chat);
  
  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  
  const handleDelete = (chatId) => {
    if (window.confirm('Are you sure you want to delete this chat?')) {
      dispatch(deleteChat(chatId));
    }
  };
  
  if (loading && chats.length === 0) {
    return <div className="text-center py-4">Loading chats...</div>;
  }
  
  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }
  
  if (chats.length === 0) {
    return <div className="text-center py-4">No chats yet. Start a conversation!</div>;
  }
  
  return (
    <div className="space-y-4">
      {chats.map((chat) => (
        <div key={chat.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-start">
                <div className="font-medium">You:</div>
                <p className="ml-2">{chat.message}</p>
              </div>
              <div className="mt-2 pl-4 border-l-2 border-indigo-300">
                <div className="flex items-start">
                  <div className="font-medium text-indigo-600">AI:</div>
                  <p className="ml-2">{chat.response}</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                {new Date(chat.created_at).toLocaleString()}
              </div>
            </div>
            <button
              onClick={() => handleDelete(chat.id)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;