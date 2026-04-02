import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
               <span className="text-blue-600 font-semibold tracking-wide text-sm uppercase">Testimonials</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-slate-900 leading-[1.1]">
               Trusted by Innovators
             </h2>
          </div>
          
          <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1 group">
            All reviews 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-8 hover:shadow-lg transition-all h-full">
            <div className="text-blue-500 mb-6 font-serif text-5xl leading-none">"</div>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-12">
              "We replaced our entire tier-1 support layer. The AI resolves cases beautifully without hallucinations. Client retention holds at an astonishing ~98%."
            </p>
            <div className="mt-auto"></div>
          </div>
          
          {/* Card 2 - Logo Style */}
          <div className="bg-blue-500 rounded-[24px] h-full flex items-center justify-center p-8 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] transition-all">
            <h3 className="text-white text-3xl font-bold tracking-tight">drintle</h3>
          </div>
          
          {/* Card 3 - Logo Style */}
          <div className="bg-slate-50 border border-slate-200 rounded-[24px] h-full flex items-center justify-center p-8">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-700">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <h3 className="text-slate-700 text-xl font-bold tracking-tight">Dropbase</h3>
            </div>
          </div>
          
          {/* Card 4 - Block Style */}
          <div className="bg-blue-500 rounded-[24px] h-full flex justify-center flex-col p-8 bg-gradient-to-br from-blue-500 to-blue-600">
             <div className="w-16 h-16 rounded-full border-2 border-white/20 mb-4 opacity-50"></div>
             <div className="w-3/4 h-2 bg-white/20 rounded-full mb-2"></div>
             <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
          </div>
          
          {/* Card 5 - Content + Logo */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-8 col-span-1 md:col-span-2 flex flex-col md:flex-row items-center gap-8 hover:shadow-lg transition-all text-center md:text-left">
            <div className="flex-1">
              <div className="text-blue-500 mb-4 font-serif text-5xl leading-none">"</div>
              <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                "The speed of deployment is breathtaking. We synced our Notion wiki and within hours, the agents were handling rigorous technical inquiries effortlessly."
              </p>
            </div>
            <div className="flex-shrink-0 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8 mt-4 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
               <h3 className="text-slate-800 text-2xl font-bold tracking-tight flex items-center gap-2">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
                 Toory
               </h3>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-8 hover:shadow-lg transition-all">
            <div className="text-blue-500 mb-6 font-serif text-5xl leading-none">"</div>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              "Our operational metrics skyrocketed. We operate 24/7 with zero latency effectively scaling our output by 400%."
            </p>
          </div>
          
          {/* Card 7 */}
          <div className="bg-slate-50 border border-slate-200 rounded-[24px] h-full flex items-center justify-center p-8 px-12 text-center hover:bg-slate-100 transition-all cursor-pointer">
            <h3 className="text-slate-400 text-lg font-bold tracking-[0.2em] uppercase">And 20,000 More</h3>
          </div>
          
          {/* Card 8 */}
          <div className="bg-blue-500 rounded-[24px] h-full flex items-center justify-center p-8 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.4)]">
             <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="rotate-45"><path d="M12 2L2 22l10-4 10 4L12 2z"/></svg>
                <h3 className="text-white text-2xl font-bold tracking-tight">Kerrimo</h3>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
