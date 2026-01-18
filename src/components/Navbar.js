'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check login status on component mount
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const email = localStorage.getItem('userEmail') || '';
      setIsLoggedIn(loggedIn);
      setUserEmail(email);
    };
    
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail('');
    router.push('/');
  };
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StyleVault
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-purple-600 transition-colors">
              Collections
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">
              Featured
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link href="/account" className="text-gray-600 hover:text-purple-600 transition-colors">
                  My Account
                </Link>
                <span className="text-sm text-gray-600">
                  Welcome, {userEmail.split('@')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-md hover:from-red-600 hover:to-red-700 transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition-colors">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}