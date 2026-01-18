'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

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
  return (
    <div className="bg-white">
      {/* Welcome Message for Logged In Users */}
      {isLoggedIn && (
        <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg">
              🎉 Welcome back, <strong>{userEmail.split('@')[0]}</strong>! Enjoy exclusive member benefits and early access to new collections.
            </p>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to StyleVault</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover your unique style with our curated collection of premium fashion. 
            From trendy streetwear to elegant formal wear - find your perfect look.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose StyleVault</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about helping you express your unique style with carefully curated fashion pieces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected fabrics and materials for lasting comfort and style</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trendy Styles</h3>
              <p className="text-gray-600">Latest fashion trends and timeless classics for every occasion</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Fit</h3>
              <p className="text-gray-600">Comprehensive size guide and easy returns for the perfect fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Discover our curated collections for every style</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-xl font-semibold mb-3">Women's Fashion</h3>
              <p className="text-gray-600">Elegant dresses, chic tops, and stylish bottoms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-semibold mb-3">Men's Collection</h3>
              <p className="text-gray-600">Sharp suits, casual wear, and modern essentials</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👟</div>
              <h3 className="text-xl font-semibold mb-3">Footwear</h3>
              <p className="text-gray-600">Comfortable sneakers, elegant heels, and casual shoes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👜</div>
              <h3 className="text-xl font-semibold mb-3">Accessories</h3>
              <p className="text-gray-600">Bags, jewelry, watches, and fashion accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Collections</h2>
            <p className="text-lg text-gray-600">Trending styles and seasonal favorites</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🌸</div>
                  <h4 className="text-lg font-semibold">Spring Collection</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fresh Spring Styles</h3>
                <p className="text-gray-600">Light fabrics, floral patterns, and vibrant colors for the new season</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">💼</div>
                  <h4 className="text-lg font-semibold">Business Attire</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Professional Wardrobe</h3>
                <p className="text-gray-600">Sophisticated suits, blazers, and formal wear for the modern professional</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🏃‍♀️</div>
                  <h4 className="text-lg font-semibold">Activewear</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Active Lifestyle</h3>
                <p className="text-gray-600">Performance wear and athleisure for your active lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Shop with StyleVault</h2>
            <p className="text-lg text-gray-600">Benefits that make us your go-to fashion destination</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                    <p className="text-gray-600">Free shipping on orders over $75 with fast delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                    <p className="text-gray-600">30-day hassle-free returns and exchanges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
                    <p className="text-gray-600">Safe and secure payment processing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join StyleVault VIP</h3>
              <p className="mb-6">Get exclusive access to new collections, special discounts, and styling tips.</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from satisfied StyleVault shoppers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Miller</h4>
                  <p className="text-gray-600 text-sm">Fashion Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Amazing quality and style! I've found my go-to place for trendy clothes that actually fit well."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jessica Davis</h4>
                  <p className="text-gray-600 text-sm">Working Professional</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Perfect for my work wardrobe. Professional, stylish, and the quality is outstanding."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mike Johnson</h4>
                  <p className="text-gray-600 text-sm">Style Blogger</p>
                </div>
              </div>
              <p className="text-gray-600">
                "StyleVault always has the latest trends. Fast shipping and excellent customer service!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Questions about sizing, styling, or orders? We're here to help!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">hello@stylevault.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">(555) 123-STYLE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">123 Fashion Ave, Style City</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}