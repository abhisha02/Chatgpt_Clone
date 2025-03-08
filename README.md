# AI Chat Application

A full-stack application that enables users to chat with an AI assistant powered by OpenAI's GPT models. Built with React on the frontend and Django Rest Framework on the backend.

## Features

- User authentication (register, login, logout)
- JWT token-based authentication with refresh tokens
- Persistent chat history for each user
- Real-time AI responses using OpenAI API
- Clean and responsive UI built with Tailwind CSS
- State management with Redux Toolkit

## Tech Stack

### Frontend
- React
- Redux Toolkit for state management
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling
- js-cookie for token management

### Backend
- Django
- Django Rest Framework
- OpenAI Python client
- Simple JWT for authentication

## Project Structure

### Frontend

```
src/
├── api/
│   ├── axios.js       # Axios instance with interceptors
│   ├── authApi.js     # Authentication API calls
│   └── chatApi.js     # Chat API calls
├── components/
│   ├── Auth/          # Authentication components
│   ├── Chat/          # Chat components
│   └── Layout/        # Layout components
├── store/
│   ├── index.js       # Redux store configuration
│   ├── slices/        # Redux slices
│   └── middleware/    # Redux middleware
├── utils/
│   └── cookies.js     # Cookie management utilities
├── App.jsx            # Main application component
└── main.jsx          # Entry point
```

### Backend

The backend is built with Django Rest Framework and consists of the following main components:

- `models.py` - Database models for User and Chat
- `serializers.py` - Serializers for API responses
- `views.py` - API endpoints and business logic
- `urls.py` - URL routing

## Setup and Installation

### Prerequisites
- Node.js and npm
- Python 3.8+
- OpenAI API key

### Backend Setup
1. Clone the repository
2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Create a `.env` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
5. Run migrations:
   ```
   python manage.py migrate
   ```
6. Start the server:
   ```
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/register/` - Register a new user
- `POST /api/login/` - Login user and receive tokens
- `POST /api/logout/` - Logout user and blacklist token

### Chat
- `GET /api/chats/` - Get all chats for the authenticated user
- `POST /api/chats/` - Create a new chat (sends message to AI)
- `GET /api/chats/<id>/` - Get a specific chat
- `DELETE /api/chats/<id>/` - Delete a specific chat

## License

MIT
