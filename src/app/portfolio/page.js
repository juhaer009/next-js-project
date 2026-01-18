export default function Portfolio() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Our most impactful work</p>
          </div>
          
          <div className="space-y-16">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="text-2xl font-bold">E-commerce Platform</h3>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
                  <span className="text-blue-600 font-semibold">Web Development</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">ShopSmart E-commerce</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A comprehensive e-commerce platform built with Next.js and Stripe integration. 
                  Features include real-time inventory management, advanced search, and mobile-optimized checkout.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Stripe</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    300% increase in online sales
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    50% reduction in cart abandonment
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-green-50 px-4 py-2 rounded-full inline-block mb-4">
                  <span className="text-green-600 font-semibold">Mobile App</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">HealthTracker Pro</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A comprehensive health monitoring app with real-time data sync, AI-powered insights, 
                  and integration with popular fitness devices. Available on iOS and Android.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">AWS</span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    100K+ active users
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    4.8/5 App Store rating
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-2xl font-bold">Health Tracking App</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-purple-50 px-4 py-2 rounded-full inline-block mb-4">
                  <span className="text-purple-600 font-semibold">Web Application</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">FinanceFlow Dashboard</h3>
                <p className="text-lg text-gray-600 mb-6">
                  A powerful financial analytics platform with real-time data visualization, 
                  custom reporting, and advanced filtering capabilities for enterprise clients.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">D3.js</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Redis</span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Real-time data processing
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    99.9% uptime achieved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">More Projects</h2>
            <p className="text-lg text-gray-600">Additional work we're proud of</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🍕</div>
                  <h4 className="text-lg font-semibold">Food Delivery</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">QuickEats Platform</h3>
                <p className="text-gray-600 mb-4">On-demand food delivery app with real-time tracking</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">Flutter</span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">Firebase</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🎓</div>
                  <h4 className="text-lg font-semibold">Learning Platform</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">EduConnect LMS</h3>
                <p className="text-gray-600 mb-4">Comprehensive learning management system</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">Vue.js</span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">Laravel</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <h4 className="text-lg font-semibold">Real Estate</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">PropertyHub Portal</h3>
                <p className="text-gray-600 mb-4">Modern real estate listing and management platform</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">Angular</span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">.NET</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">💄</div>
                  <h4 className="text-lg font-semibold">Beauty & Wellness</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">GlowUp Booking</h3>
                <p className="text-gray-600 mb-4">Salon and spa appointment booking system</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">Express</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🚗</div>
                  <h4 className="text-lg font-semibold">Transportation</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">RideShare Connect</h3>
                <p className="text-gray-600 mb-4">Carpooling and ride-sharing mobile application</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">React Native</span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">GraphQL</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="text-lg font-semibold">IoT Dashboard</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SmartHome Control</h3>
                <p className="text-gray-600 mb-4">IoT device management and monitoring platform</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">Next.js</span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">MQTT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's create something amazing together. Contact us to discuss your vision.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}