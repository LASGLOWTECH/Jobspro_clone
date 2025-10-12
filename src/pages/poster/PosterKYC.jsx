import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function PosterKYC() {
  const { user, updateKyc } = useAuth();
  const [company, setCompany] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    updateKyc('Verified');
    setSuccessMessage('✅ KYC submitted successfully! Status set to Verified.');
    setTimeout(() => setSuccessMessage(''), 4000); // Hide message after 4s
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-3">
        KYC Verification (Poster)
      </h2>

      {successMessage && (
        <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
          {successMessage}
        </div>
      )}

      <form onSubmit={submit} className="space-y-5">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Business Registration (Simulated) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Registration (Simulated)
          </label>
          <input
            type="file"
            disabled
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 cursor-not-allowed"
          />
          <p className="text-xs text-gray-500 mt-1">
            File upload disabled  this is a simulated KYC process.
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all"
          >
            Submit KYC
          </button>
        </div>
      </form>
    </div>
  );
}
