import React from 'react';

function Details2() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full h-full overflow-y-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Farmer Details</h2>
        <form>

          {/* Land */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="land">
              Land
            </label>
            <input
              type="text"
              id="land"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter land details"
            />
          </div>

          {/* Land Acre */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="landacre">
              Land Acre
            </label>
            <input
              type="text"
              id="landacre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter land area in acres"
            />
          </div>

          {/* Aadhaar Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="aadhar">
              Aadhaar Number
            </label>
            <input
              type="text"
              id="aadhar"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Aadhaar number"
            />
          </div>

          {/* Farmer Card (File Upload) */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="farmerCard">
              Farmer Card
            </label>
            <input
              type="file"
              id="farmerCard"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-500 text-white px-7 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-7 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Details2;
