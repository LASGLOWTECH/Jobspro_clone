import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SeekerHome from './SeekerHome';
import SeekerKYC from './SeekerKYC';
import SeekerJobs from './SeekerJobs';

export default function SeekerDashboard() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { path: '/seeker', label: 'Dashboard' },
    { path: '/seeker/kyc', label: 'KYC Verification' },
    { path: '/seeker/jobs', label: 'Jobs' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-primary to-blue-700 text-white flex flex-col justify-between p-6 shadow-lg">
        <div>
          <div className="mb-6 border-b border-white/30 pb-4">
            <h2 className="text-lg font-semibold">{user?.name || 'User Name'}</h2>
            <p className="text-sm text-gray-200">Role: Job Seeker</p>
            <p className="text-sm text-gray-200">KYC: {user?.kycStatus || 'Pending'}</p>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? 'bg-white text-primary shadow-md'
                      : 'hover:bg-white/20 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/20">
          <button
            onClick={logout}
            className="w-full bg-white text-primary font-semibold py-2.5 rounded-xl hover:bg-gray-100 transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-6 border-b pb-3">
          <h1 className="text-2xl font-semibold text-primary">Seeker Dashboard</h1>
          <p className="text-sm text-gray-500">View jobs, update KYC, and manage your profile</p>
        </header>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Routes>
            <Route index element={<SeekerHome />} />
            <Route path="kyc" element={<SeekerKYC />} />
            <Route path="jobs" element={<SeekerJobs />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
