import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function SeekerHome() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Seeker Dashboard
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-6 max-w-lg">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-600 font-medium">Applications Sent</span>
            <span className="text-lg font-semibold text-primary">2</span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-600 font-medium">KYC Status</span>
            <span
              className={`text-lg font-semibold ${
                user?.kycStatus === 'Verified'
                  ? 'text-green-600'
                  : user?.kycStatus === 'Pending Review'
                  ? 'text-yellow-500'
                  : 'text-gray-500'
              }`}
            >
              {user?.kycStatus || 'Not Submitted'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Profile Completeness</span>
            <div className="w-1/2 bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-primary h-3 rounded-full"
                style={{ width: '70%' }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700">70%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
