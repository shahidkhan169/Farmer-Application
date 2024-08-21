import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Forgot Password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-2" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white-100 bg-opacity-20 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-2" htmlFor="new-password">New Password</label>
            <input type="password" id="new-password"
    className="w-full p-3 border border-gray-300 rounded-lg bg-white-100 bg-opacity-20 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-600" placeholder="Enter new password"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-semibold text-black mb-2" htmlFor="confirm-password">Confirm Password</label>
  <input
    type="password" id="confirm-password"
    className="w-full p-3 border border-gray-300 rounded-lg bg-white-100 bg-opacity-20 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-600"
    placeholder="Confirm new password"
  />
</div>

          <button type="submit" className="w-full py-3 mt-6 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 focus:outline-none">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;