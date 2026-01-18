'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check login status
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const email = localStorage.getItem('userEmail') || '';
      
      if (!loggedIn) {
        router.push('/login');
        return;
      }
      
      setIsLoggedIn(loggedIn);
      setUserEmail(email);
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 text-white">
            <h1 className="text-3xl font-bold">My Account</h1>
            <p className="text-purple-100 mt-2">Welcome back, {userEmail.split('@')[0]}!</p>
          </div>

          {/* Account Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Profile Info */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-600">
                      {userEmail}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                    <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-600">
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Status</label>
                    <div className="bg-green-50 px-3 py-2 rounded-md text-green-600 font-medium">
                      ✅ Active VIP Member
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-3 rounded-md transition-colors text-left">
                    📦 View Order History
                  </button>
                  <button className="w-full bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-3 rounded-md transition-colors text-left">
                    ❤️ My Wishlist
                  </button>
                  <button className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-3 rounded-md transition-colors text-left">
                    📍 Shipping Addresses
                  </button>
                  <button className="w-full bg-green-100 hover:bg-green-200 text-green-700 px-4 py-3 rounded-md transition-colors text-left">
                    💳 Payment Methods
                  </button>
                </div>
              </div>
            </div>

            {/* VIP Benefits */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🌟 Your VIP Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <h4 className="font-medium text-gray-800">Free Shipping</h4>
                  <p className="text-sm text-gray-600">On all orders</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-medium text-gray-800">Early Access</h4>
                  <p className="text-sm text-gray-600">New collections</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎁</div>
                  <h4 className="font-medium text-gray-800">Exclusive Deals</h4>
                  <p className="text-sm text-gray-600">Member-only discounts</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-sm">👗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Viewed Spring Collection</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 text-sm">❤️</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Added items to wishlist</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✅</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Account created</p>
                      <p className="text-sm text-gray-500">Welcome to StyleVault!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}