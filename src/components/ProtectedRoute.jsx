import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();
  const loc = useLocation();

  if (!user) {

    return <Navigate to={`/login/${requiredRole}`} state={{ from: loc }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // wrong role logged in
    // redirect to own dashboard
    const redirectTo = user.role === 'seeker' ? '/seeker' : '/poster';
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
