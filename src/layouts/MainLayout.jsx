import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-blue-600">
            AtlasPood
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/fabric" className="hover:text-blue-600">
              Fabric
            </Link>
            <Link
              to="/login"
              className="text-sm text-white bg-blue-600 hover:bg-blue-700 rounded px-3 py-1"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-50 rounded px-3 py-1"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="w-full mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between text-sm">
          <span className="text-gray-500">
            © {new Date().getFullYear()} AtlasPood
          </span>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/fabric" className="hover:text-blue-600">
              Fabric
            </Link>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="hover:text-blue-600">
              Register
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
