# Whispering Paper — Book ECommerce Website (React + Vite)

Live demo: https://wispering-paper.vercel.app/

## 📚 Project Overview

**Whispering Paper** is a modern book e-commerce web application built with React and Vite. The platform allows users to browse books, view detailed information, manage reading lists, and create accounts with Firebase authentication. This project demonstrates full-stack web development skills including routing, state management, user authentication, and responsive design.

## ✨ Key Features

### 🔐 Authentication System
- **User Registration** - Create accounts with email, password, display name, and photo URL
- **Email Verification** - Automated email verification on signup
- **Secure Sign In/Sign Out** - Firebase-powered authentication
- **Profile Management** - Display user name and photo in the navigation bar
- **Password Visibility Toggle** - Eye icon to show/hide passwords during input

### 📖 Book Management
- **Book Catalog** - Browse a comprehensive collection of books
- **Detailed Book View** - View complete information about each book using dynamic routing
- **Listed Books** - Manage your reading list and track books
- **Route-based Data Loading** - Efficient data fetching using React Router loaders

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first design using Tailwind CSS
- **Gradient Styling** - Beautiful blue-to-purple gradients throughout the interface
- **Professional Forms** - Clean, accessible sign-up and sign-in pages
- **Social Login Options** - UI for Google and Facebook authentication (ready for integration)
- **Interactive Elements** - Smooth transitions, hover effects, and focus states

### 🛠️ Technical Highlights
- **React 19** with modern hooks (`use`, `useState`, `useEffect`)
- **Vite** for fast development and optimized builds
- **React Router** for seamless navigation and data loading
- **Firebase Authentication** for secure user management
- **Tailwind CSS** and **DaisyUI** for styling
- **Context API** for global state management

## 📁 Project Structure

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation bar with user profile
│   ├── Footer/         # Page footer
│   └── Banner/         # Homepage banner
├── pages/              # Page components
│   ├── Home/           # Homepage with book listings
│   ├── Books/          # Book catalog and single book view
│   ├── BookDetails/    # Detailed book information page
│   ├── ListedBooks/    # User's reading list
│   ├── SignUp/         # User registration page
│   ├── SignIn/         # User login page
│   └── Root/           # Root layout component
├── contextProvider/    # React Context for global state
│   ├── AuthContext.jsx # Authentication context
│   └── AuthProvider.jsx # Authentication provider component
├── firebase/           # Firebase configuration
│   └── firebase.init.js # Firebase initialization
├── Routes/             # Application routing
│   └── Routes.jsx      # Route definitions and loaders
└── Utilities/          # Helper functions
    └── addToLocalStorage.js # Local storage utilities

public/
└── data/
    └── booksData.json  # Book data source
```

## 🚀 Getting Started

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account (for authentication features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd boipoka-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password authentication
   - Copy your Firebase config to `src/firebase/firebase.init.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

## 🔧 Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Routing**: React Router v7
- **Authentication**: Firebase Auth
- **State Management**: React Context API
- **Icons**: React Icons
- **Data Format**: JSON

## 📝 Usage Guide

### User Authentication
1. **Sign Up**: Click "Sign Up" → Fill in name, email, photo URL, and password → Verify email
2. **Sign In**: Click "Sign In" → Enter credentials → Access your profile
3. **Profile**: View your display name and photo in the navigation bar
4. **Sign Out**: Click "Sign Out" to log out securely

### Browsing Books
- Browse the homepage to see featured books
- Click on any book to view detailed information
- Add books to your reading list (Listed Books page)

## 🎯 Future Enhancements

- [ ] Social authentication (Google, Facebook)
- [ ] Book search and filtering
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] User reviews and ratings
- [ ] Admin dashboard for book management
- [ ] Dark mode support

## 📄 License

This project is part of a web development course and is intended for educational purposes.

---

**Whispering Paper** - Where every page whispers a new story 📖✨

