import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { HiMiniBars3, HiMiniXMark } from 'react-icons/hi2';
import PosterHome from './PosterHome';
import PosterKYC from './PosterKYC';
import PosterJobs from './PosterJobs';

export default function PosterDashboard() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { path: '/poster', label: 'Dashboard' },
    { path: '/poster/kyc', label: 'KYC Verification' },
    { path: '/poster/jobs', label: 'Jobs (Posted)' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-primary text-white">
        <h1 className="text-lg font-semibold">Poster Dashboard</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? (
            <HiMiniXMark size={26} className="text-white" />
          ) : (
            <HiMiniBars3 size={26} className="text-white" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-gradient-to-b from-primary to-blue-700 text-white flex flex-col justify-between p-6 shadow-lg z-50 transform transition-transform duration-300 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div>
          <div className="mb-6 border-b border-white/30 pb-4">
            <h2 className="text-lg font-semibold">{user?.name || 'User Name'}</h2>
            <p className="text-sm text-gray-200">Role: Job Poster</p>
            <p className="text-sm text-gray-200">KYC: {user?.kycStatus || 'Pending'}</p>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile nav click
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

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 mt-4 md:mt-0">
        <header className="mb-4 md:mb-6 border-b pb-3">
          <h1 className="text-xl md:text-2xl font-semibold text-primary">Poster Dashboard</h1>
          <p className="text-sm text-gray-500">Manage your job postings and KYC verification</p>
        </header>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
          <Routes>
            <Route index element={<PosterHome />} />
            <Route path="kyc" element={<PosterKYC />} />
            <Route path="jobs" element={<PosterJobs />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
