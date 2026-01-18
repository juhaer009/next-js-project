'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Services() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://next-js-project-server-two.vercel.app/clothes');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setClothes(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching clothes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchClothes();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Collections</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our curated selection of premium fashion pieces designed to elevate your style.
          </p>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Fashion</h2>
            <p className="text-lg text-gray-600">Explore our newest arrivals and trending styles</p>
          </div>
          
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <span className="ml-3 text-gray-600">Loading collections...</span>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg inline-block">
                <p className="font-medium">Error loading collections</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
          )}
          
          {!loading && !error && clothes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {clothes.map((item, index) => (
                <div key={item._id || item.id || index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <Image
                      src={item.image || item.imageUrl || item.img || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzE2MS4wNDYgMTAwIDE3MCA5MC45NTQzIDE3MCA4MEM1NyA2OS4wNDU3IDE0Ny45NTQgNjAgMTM2IDYwQzEyNC45NTQgNjAgMTE2IDY5LjA0NTcgMTE2IDgwQzExNiA5MC45NTQzIDEyNC45NTQgMTAwIDEzNiAxMDBIMTUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTgwIDEyMEgxMjBDMTA4Ljk1NCAxMjAgMTAwIDEyOC45NTQgMTAwIDE0MFYyMDBDMTAwIDIxMS4wNDYgMTA4Ljk1NCAyMjAgMTIwIDIyMEgxODBDMTkxLjA0NiAyMjAgMjAwIDIxMS4wNDYgMjAwIDIwMFYxNDBDMjAwIDEyOC45NTQgMTkxLjA0NiAxMjAgMTgwIDEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'}
                      alt={item.name || item.title || 'Fashion Item'}
                      width={300}
                      height={256}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzE2MS4wNDYgMTAwIDE3MCA5MC45NTQzIDE3MCA4MEM1NyA2OS4wNDU3IDE0Ny45NTQgNjAgMTM2IDYwQzEyNC45NTQgNjAgMTE2IDY5LjA0NTcgMTE2IDgwQzExNiA5MC45NTQzIDEyNC45NTQgMTAwIDEzNiAxMDBIMTUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTgwIDEyMEgxMjBDMTA4Ljk1NCAxMjAgMTAwIDEyOC45NTQgMTAwIDE0MFYyMDBDMTAwIDIxMS4wNDYgMTA4Ljk1NCAyMjAgMTIwIDIyMEgxODBDMTkxLjA0NiAyMjAgMjAwIDIxMS4wNDYgMjAwIDIwMFYxNDBDMjAwIDEyOC45NTQgMTkxLjA0NiAxMjAgMTgwIDEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.name || item.title || 'Fashion Item'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description || item.desc || 'Stylish clothing piece from our collection'}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        {item.price && (
                          <span className="text-xl font-bold text-purple-600">
                            ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                          </span>
                        )}
                        {item.originalPrice && item.originalPrice !== item.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${typeof item.originalPrice === 'number' ? item.originalPrice.toFixed(2) : item.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition-colors text-sm">
                        Add to Cart
                      </button>
                    </div>
                    {item.category && (
                      <div className="mt-3">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {item.category}
                        </span>
                      </div>
                    )}
                    {item.sizes && item.sizes.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Available sizes:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.sizes.map((size, sizeIndex) => (
                            <span key={sizeIndex} className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {item.colors && item.colors.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Available colors:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.colors.map((color, colorIndex) => (
                            <span key={colorIndex} className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {item.brand && (
                      <div className="mt-3">
                        <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs">
                          {item.brand}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {!loading && !error && clothes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <p className="text-lg font-medium">No collections available</p>
                <p className="text-sm mt-1">Check back soon for new arrivals!</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Discover our curated collections for every style</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-xl font-semibold mb-3">Women&apos;s Fashion</h3>
              <p className="text-gray-600">Elegant dresses, chic tops, and stylish bottoms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-semibold mb-3">Men&apos;s Collection</h3>
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

      {/* Why Shop StyleVault */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Shop StyleVault</h2>
            <p className="text-lg text-gray-600">Premium quality and exceptional service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected fabrics and materials for lasting comfort</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $75 with quick delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns and exchanges</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Elevate Your Style?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our collections and find pieces that express your unique personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors">
              Shop Now
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              View Lookbook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}