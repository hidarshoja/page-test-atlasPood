import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Full name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2"
        >
          Create account
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
}

