import React from 'react';
import { samplePostedJobs } from '../../assets/data/mockData';

export default function PosterHome() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Poster Dashboard
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-6 max-w-lg">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-600 font-medium">Jobs Posted</span>
            <span className="text-lg font-semibold text-primary">
              {samplePostedJobs.length}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-600 font-medium">Applications Received</span>
            <span className="text-lg font-semibold text-primary1">5</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Active Listings</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary2 rounded-full"></div>
              <span className="text-lg font-semibold text-gray-800">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
