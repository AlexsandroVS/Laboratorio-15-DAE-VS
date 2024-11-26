import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './components/Dashboard'; 
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Private from './components/Private';

const App = () => {

  const protectedRoutes = [
    { path: '/dashboard', component: <Dashboard /> },
    { path: '/private', component: <Private /> },
  ];

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
          {protectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<ProtectedRoute>{route.component}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
