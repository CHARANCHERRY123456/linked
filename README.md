# 🚀 Mini LinkedIn - Professional Social Network

A modern, full-stack social networking application inspired by LinkedIn, built with cutting-edge technologies for seamless professional networking and content sharing.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication** with secure token management
- **Password Encryption** using bcryptjs
- **Protected Routes** with middleware authentication
- **Persistent Login** with localStorage token storage

### 👤 User Management
- **User Registration & Login** with form validation
- **Profile Management** with personalized user profiles
- **User Avatar** with initials display
- **Profile Navigation** from navbar avatar click

### 📝 Content Management
- **Create Posts** with title and content
- **Real-time Feed** displaying all user posts
- **User-specific Posts** on profile pages
- **Interactive UI** with like and comment buttons (UI ready)

### 🎨 Modern UI/UX
- **Responsive Design** optimized for all devices
- **Modern Glassmorphism** design with gradient backgrounds
- **Smooth Animations** and hover effects
- **Professional Layout** with card-based components
- **LinkedIn-inspired** design patterns

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.0
- **HTTP Client**: Axios
- **State Management**: React Context API
- **UI Components**: Custom React components

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Logging**: Morgan
- **Development**: ts-node-dev, nodemon

### Development Tools
- **Type Safety**: TypeScript across the stack
- **Code Quality**: ESLint
- **Dev Server**: Next.js dev server & nodemon
- **CORS**: Enabled for cross-origin requests

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/CHARANCHERRY123456/linked.git
cd linked
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "PORT=8000
MONGODB_URI=mongodb://localhost:27017/mini-linkedin
JWT_SECRET=your-super-secret-jwt-key" > .env

# Start the backend server
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:8000/api" > .env.local

# Start the frontend server
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000

## 📁 Project Structure

```
linked/
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controller/     # Route controllers
│   │   ├── middleware/     # Authentication middleware
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── service/        # Business logic
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   └── package.json
└── frontend/
    ├── src/
    │   ├── app/            # Next.js app directory
    │   ├── components/     # Reusable UI components
    │   ├── context/        # React context providers
    │   └── utils/          # Frontend utilities
    └── package.json
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Posts
- `GET /api/post` - Get all posts
- `POST /api/post` - Create new post (protected)

### Profile
- `GET /api/profile/:id` - Get user profile
- `GET /api/profile/:id/posts` - Get user's posts

## 🎨 UI Components

### Core Components
- **Navbar** - Navigation with user avatar and authentication
- **PostCard** - LinkedIn-style post display with interactions
- **PostForm** - Create new posts with media upload UI
- **ProfilePostCard** - User-specific post cards with actions
- **Input** - Styled form input with focus states

### Pages
- **Home** - Main feed with post creation and display
- **Login** - Modern authentication form
- **Register** - User registration with validation
- **Profile** - User profile with posts

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/mini-linkedin
JWT_SECRET=your-super-secret-jwt-key
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or your preferred database
2. Configure environment variables
3. Deploy to Heroku, Railway, or your preferred platform

### Frontend Deployment
1. Update `NEXT_PUBLIC_API_URL` to your backend URL
2. Deploy to Vercel, Netlify, or your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Charan Cherry**
- GitHub: [@CHARANCHERRY123456](https://github.com/CHARANCHERRY123456)

## 🙏 Acknowledgments

- Inspired by LinkedIn's professional networking platform
- Built with modern web development best practices
- Designed for scalability and maintainability

---

⭐ **Star this repository if you found it helpful!** ⭐
