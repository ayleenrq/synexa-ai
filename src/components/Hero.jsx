import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden dark-section flex flex-col items-center justify-center !bg-[#030712] pt-20">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      ></div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm font-medium text-blue-400 mb-8 border border-white/10 shadow-lg backdrop-blur-md bg-white/5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
          Next-Generation Cognitive Agents
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-medium tracking-tight mb-6 leading-[1.1] text-shadow-sm">
          <span className="gradient-text drop-shadow-lg">Automate Scale with</span><br />
          <span className="text-white drop-shadow-lg">Cognitive Intelligence.</span>
        </h1>
        
        <p className="text-lg md:text-[21px] text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
          Deploy hyper-intelligent agents that understand deep context, handle complex negotiations, and elevate your workflows seamlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-medium transition-all text-[15px] card-shadow flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
            Start Building Free →
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-medium transition-all text-[15px] flex items-center justify-center gap-2 backdrop-blur-md">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
            </span>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
