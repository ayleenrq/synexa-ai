import React from 'react';
import { ChevronRight, Component, LineChart, Code } from 'lucide-react';

const SecondaryFeatures = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl md:text-[42px] font-serif font-normal tracking-tight text-slate-900 mb-6 leading-[1.1]">
            The Cognitive<br/>Era Begins<br/>Here
          </h2>
        </div>
        
        <div className="w-full md:w-2/3 flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll gap-6">
          {/* Card 1 */}
          <div className="min-w-[300px] md:min-w-[340px] bg-white border border-slate-200 p-8 rounded-[24px] snap-center hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-16">
              <Component size={18} className="text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Adaptive Neural Models</h3>
            <p className="text-slate-500 text-[15px] mb-8 leading-relaxed">
              Evolves autonomously by ingesting secure organizational documents and data streams.
            </p>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
              <ChevronRight size={18} className="text-slate-600" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="min-w-[300px] md:min-w-[340px] bg-white border border-slate-200 p-8 rounded-[24px] snap-center hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900 rounded-bl-[100px] -mr-16 -mt-16 opacity-5"></div>
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-16 bg-slate-900 text-white">
              <LineChart size={18} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instantaneous Auditing</h3>
            <p className="text-slate-500 text-[15px] mb-8 leading-relaxed">
              Monitor telemetry and behavioral logic of active agents globally in real-time.
            </p>
            <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/20">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Card 3 */}
          <div className="min-w-[300px] md:min-w-[340px] bg-white border border-slate-200 p-8 rounded-[24px] snap-center hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-16">
              <Code size={18} className="text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Infinite Integrations</h3>
            <p className="text-slate-500 text-[15px] mb-8 leading-relaxed">
              Connect instantly to existing CRMs, ERPs, and workforce management systems.
            </p>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
              <ChevronRight size={18} className="text-slate-600" />
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default SecondaryFeatures;
