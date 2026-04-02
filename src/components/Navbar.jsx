import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#030712]/80 backdrop-blur-md px-6">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">synexa</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
        </div>
        
        <div className="flex items-center gap-5">
          <button className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
            Sign In
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-[15px] font-medium px-5 py-2.5 rounded-full transition-all card-shadow hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Start Free  →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
