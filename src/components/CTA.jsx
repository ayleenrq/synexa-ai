import React from 'react';

const CTA = () => {
  return (
    <section className="relative pt-32 pb-16 dark-section border-t border-white/5 overflow-hidden">
      {/* Abstract background gradient grid overlay */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-10"></div>
      
      {/* Background Dots Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex items-center gap-3 mb-10 border border-white/10 w-fit px-4 py-2 rounded-full glass backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">No credit card required</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 pb-12 border-b border-white/10">
          <h2 className="text-7xl md:text-[8rem] font-serif font-normal tracking-tighter text-white leading-[0.85] opacity-90 transition-opacity hover:opacity-100 uppercase">
            INITIATE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-transparent opacity-60">NOW</span>
          </h2>
          
          <button className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shrink-0">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
