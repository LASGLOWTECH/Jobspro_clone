import React, { useState } from 'react';
import { samplePostedJobs } from '../../assets/data/mockData';

export default function PosterJobs() {
  const [jobs, setJobs] = useState(samplePostedJobs);
  const [title, setTitle] = useState('');
  const [applications, setApplications] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const addJob = (e) => {
    e.preventDefault();
    const newJob = {
      id: 'p' + (jobs.length + 1),
      title,
      company: 'Your Company',
      applications: Number(applications) || 0,
    };
    setJobs((s) => [newJob, ...s]);
    setTitle('');
    setApplications(0);
    setSuccessMessage(' Job added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Page Header */}
      <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-3">
        Your Posted Jobs
      </h2>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
          {successMessage}
        </div>
      )}

      {/* Job Creation Form */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Add New Job</h3>
        <form onSubmit={addJob} className="grid md:grid-cols-2 gap-4">
          {/* Job Title */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g., Frontend Developer"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Initial Applications */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Applications (Simulated)
            </label>
            <input
              type="number"
              value={applications}
              onChange={(e) => setApplications(e.target.value)}
              placeholder="e.g., 12"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>

      {/* Job List */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Posted Jobs</h3>

        {jobs.length === 0 ? (
          <p className="text-sm text-gray-500">No jobs posted yet.</p>
        ) : (
          <div className="space-y-4">
            {jobs.map((j) => (
              <div
                key={j.id}
                className="flex justify-between items-center border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all bg-gray-50"
              >
                <div>
                  <h4 className="font-semibold text-gray-800">{j.title}</h4>
                  <p className="text-sm text-gray-500">{j.company}</p>
                </div>
                <div className="text-sm text-gray-600">
                  Applications:{' '}
                  <span className="font-semibold text-primary">{j.applications}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
