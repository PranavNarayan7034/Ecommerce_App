import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand/About */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Glamour.</h2>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your one-stop destination for the latest fashion trends and premium quality clothing. Redefining style since 2026.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">New Arrivals</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Men's Fashion</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Women's Fashion</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Accessories</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Sale & Offers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Contact Us</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">FAQs</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Shipping Policy</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Returns & Refunds</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay in the Loop</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 text-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-3 rounded-lg transition-colors duration-300 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Glamour. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="#" className="hover:text-slate-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
