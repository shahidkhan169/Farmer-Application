import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <p className="mb-6 text-gray-600">Welcome back!</p>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-yellow-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-yellow-500"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <Link to="/forgotpassword" className="text-yellow-500 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span>Don't have an account? </span>
                    <Link to="/signup" className="text-yellow-500 hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;