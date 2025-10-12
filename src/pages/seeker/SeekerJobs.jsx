import React, { useState } from 'react';
import { jobs } from '../../assets/data/mockData';

export default function SeekerJobs() {
  const [applied, setApplied] = useState({});

  const apply = (jobId) => {
    setApplied((prev) => ({ ...prev, [jobId]: true }));
    alert('Application submitted (simulated).');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Jobs</h2>

      <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition duration-200"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {job.company} • {job.location}
                </p>
                <p className="text-sm text-gray-500 mt-2">{job.description}</p>
              </div>

              <button
                onClick={() => apply(job.id)}
                disabled={!!applied[job.id]}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                  applied[job.id]
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary1'
                }`}
              >
                {applied[job.id] ? 'Applied' : 'Apply'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
