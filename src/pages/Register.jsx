import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Register() {
  const { role } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration + login
    login({ role, name, email });
    nav(role === 'seeker' ? '/seeker' : '/poster');
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-tr from-primary to-primary">
      
            {/* Back Arrow */}
            <div className="p-3 border-b border-gray-200">
              <button
                onClick={() => nav(-1)}
                className="flex items-center justify-start text-white hover:text-white text-lg font-semibold"
              >
                <FaArrowLeftLong className="mr-2" size={20} />
                Back
              </button>
            </div>
      
      
      <div className="bg-white/90 rounded-3xl shadow-lg p-8 w-[90%] max-w-sm text-center relative overflow-hidden">
       
       
        {/* Wave background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-primary to-primary/80 opacity-90 rounded-b-3xl clip-wave"></div>

        <h2 className="text-2xl font-bold text-primary mb-6 relative z-10 uppercase">
          Sign Up as {role === 'seeker' ? 'Job Seeker' : 'Job Poster'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="text-left">
            <label className="text-sm font-medium text-primary">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full p-3 rounded-lg bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="text-left">
            <label className="text-sm font-medium text-primary">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-lg bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="text-left">
            <label className="text-sm font-medium text-primary">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-3 rounded-lg bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition"
          >
            SIGN UP
          </button>

          <p className="text-sm mt-3 text-gray-700">
            Already have an account?{' '}
            <Link to={`/login/${role}`} className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
