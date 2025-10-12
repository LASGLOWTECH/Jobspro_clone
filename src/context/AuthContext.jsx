import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'jobspro_user_v1';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  }, [user]);

  const login = ({ role, name = '' }) => {
    const payload = {
      role, // 'seeker' or 'poster'
      name: name || (role === 'seeker' ? 'Job Seeker' : 'Job Poster'),
      kycStatus: 'Not Submitted', // Not Submitted | Pending Review | Verified
      createdAt: new Date().toISOString()
    };
    setUser(payload);
  };

  const logout = () => setUser(null);

  const updateKyc = (status) => setUser((u) => ({ ...u, kycStatus: status }));

  return (
    <AuthContext.Provider value={{ user, login, logout, updateKyc }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
