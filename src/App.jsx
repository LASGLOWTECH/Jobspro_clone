import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SeekerDashboard from './pages/seeker/SeekerDashboard';
import PosterDashboard from './pages/poster/PosterDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>

    <Routes>

  
      <Route path="/" element={<Home />} />

      <Route path="/login/:role" element={<Login />} />
      <Route path="/register/:role" element={<Register />} />

      <Route
        path="/seeker/*"
        element={
          <ProtectedRoute requiredRole="seeker">
            <SeekerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/poster/*"
        element={
          <ProtectedRoute requiredRole="poster">
            <PosterDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes></>
  );
}
