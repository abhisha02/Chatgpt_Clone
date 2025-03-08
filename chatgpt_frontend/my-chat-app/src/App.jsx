import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Navbar from './components/Layout/Navbar';
import ChatPage from './pages/ChatPage';
import PrivateRoute from './components/Auth/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/chats" element={<ChatPage />} />
            </Route>
            <Route path="/" element={<Navigate to="/chats" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
