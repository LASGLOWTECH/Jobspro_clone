import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function SeekerKYC() {
  const { user, updateKyc } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const submit = (e) => {
    e.preventDefault();
    updateKyc('Pending Review');
    alert('KYC submitted (simulated). Status set to Pending Review.');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-3">
        KYC Verification
      </h2>

      <form onSubmit={submit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* ID Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ID Type
          </label>
          <select
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="">Select</option>
            <option value="passport">Passport</option>
            <option value="national-id">National ID</option>
            <option value="driver">Driver's License</option>
          </select>
        </div>

        {/* ID Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ID Number
          </label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Document (Simulated)
          </label>
          <input
            type="file"
           
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 "
          />
          <p className="text-xs text-gray-500 mt-1">
            File upload disabled — this is a simulated KYC.
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
