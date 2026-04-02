import React from 'react';

const Logos = () => {
  return (
    <section className="py-12 border-b border-slate-200 light-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-500 mb-8">Trusted by 10,000+ teams worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 opacity-60 grayscale">
          {/* Mock Logos */}
          <div className="text-2xl font-bold tracking-tight">OUTLAB</div>
          <div className="text-2xl font-bold tracking-widest">NOYMED</div>
          <div className="flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded-sm rotate-45"></div><span className="text-xl font-bold">Squarebox</span></div>
          <div className="text-xl font-bold uppercase tracking-widest border-2 border-slate-800 px-2 py-0.5">MILLOS</div>
          <div className="flex items-center gap-1"><div className="w-6 h-6 border-4 border-slate-800 rounded-full"></div><span className="text-xl font-bold">Linear Rings</span></div>
          <div className="flex items-center gap-1"><div className="w-6 h-6 bg-slate-800 flex items-center justify-center text-white text-xs">A</div><span className="text-xl font-bold">Acme Corp</span></div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
