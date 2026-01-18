export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-lg font-bold">StyleVault</span>
            </div>
            <p className="text-gray-300">
              Your premium destination for trendy, high-quality fashion that defines your unique style.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Women's</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Men's</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Size Guide</span></li>
              <li><span className="text-gray-300">Shipping & Returns</span></li>
              <li><span className="text-gray-300">Care Instructions</span></li>
              <li><span className="text-gray-300">Track Your Order</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: hello@stylevault.com</p>
              <p>Phone: (555) 123-STYLE</p>
              <p>Address: 123 Fashion Ave, Style City</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 StyleVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}