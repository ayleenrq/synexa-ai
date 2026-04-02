import React from 'react';
import { Sparkles, TerminalSquare, Send, User, Bot, CornerDownRight } from 'lucide-react';

const AIDemo = () => {
  return (
    <section className="py-24 bg-[#0A101C] dark-section border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-white mb-6 leading-tight">
            Deploy cognitive workers that drive tangible business outcomes
          </h2>
          <p className="text-lg text-slate-400 mb-12 font-light">
            Train models to read deep organizational contexts and automatically execute complex multi-step resolutions.
          </p>
          
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 relative">
            <h4 className="text-white font-medium mb-2">Configure neural pipeline :</h4>
            <p className="text-sm text-slate-400 mb-4">Input data formats to analyze attributes</p>
            
            <div className="bg-[#030712] border border-white/5 rounded-xl p-4 flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <TerminalSquare size={16} />
              </div>
              <span className="text-sm text-slate-300 font-mono">@train/cx-data-flow</span>
            </div>
            
            <div className="bg-[#030712] border border-white/5 rounded-xl p-4 min-h-[120px] relative">
              <p className="text-slate-500 text-sm">Enter setup instructions...</p>
              
              <button className="absolute bottom-4 left-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2">
                Submit <Sparkles size={14} />
              </button>
            </div>
            
            {/* Decorative arrow pointing to chat */}
            <div className="absolute -bottom-10 right-10 text-slate-500 hidden md:block">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="rotate-[-20deg]">
                <path d="M10 10 Q 50 10 50 50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M45 45 L 50 50 L 55 45" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Right Content - Chat UI */}
        <div className="bg-[#111827] border border-white/10 rounded-[24px] shadow-2xl relative z-10 overflow-hidden flex flex-col h-[600px]">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                 <Bot size={16} className="text-white" />
               </div>
               <div>
                 <h4 className="text-white text-sm font-medium">Nexus Agent</h4>
                 <div className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                   <span className="text-xs text-slate-400">Online</span>
                 </div>
               </div>
             </div>
             <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/5 text-slate-400">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
             </div>
          </div>
          
          {/* Output Context */}
          <div className="px-6 py-3 border-b border-white/5 bg-[#030712] flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Output Area</span>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            
            {/* System Message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                <Bot size={16} />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-[15px] text-slate-300 leading-relaxed shadow-sm">
                Processing internal documentation and vectorizing semantic space to establish baseline operational logic rules.
              </div>
            </div>
            
            {/* User Message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4 text-[15px] text-white leading-relaxed max-w-[85%] shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                Can you start training a model based on the live product documentation we pushed?
              </div>
            </div>
            
            {/* System Selection UI Message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                <Bot size={16} />
              </div>
              <div className="w-full">
                <p className="text-slate-400 text-[13px] mb-2 uppercase tracking-wide font-semibold ml-1">Select action</p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 w-full">
                  <p className="text-white text-[15px] mb-4">Model Processing: Which script should I run?</p>
                  
                  <div className="space-y-2">
                    <button className="w-full bg-[#030712] border border-white/10 rounded-xl p-3 flex justify-between items-center hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center"><TerminalSquare size={12}/></div>
                        <span className="text-slate-300 text-sm font-medium">Script A</span>
                      </div>
                      <ChevronRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
                    </button>
                    
                    <button className="w-full bg-[#030712] border border-white/10 rounded-xl p-3 flex justify-between items-center hover:bg-white/5 transition-colors group border-l-2 border-l-blue-500">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center"><TerminalSquare size={12}/></div>
                        <span className="text-white text-sm font-medium">Script B</span>
                      </div>
                      <ChevronRight size={16} className="text-white transition-colors" />
                    </button>
                    
                    <button className="w-full bg-[#030712] border border-white/10 rounded-xl p-3 flex justify-between items-center hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><TerminalSquare size={12}/></div>
                        <span className="text-slate-300 text-sm font-medium">Data module</span>
                      </div>
                      <ChevronRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Input Box */}
          <div className="p-4 bg-white/[0.02] border-t border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                className="w-full bg-[#030712] border border-white/10 rounded-full py-3.5 pl-6 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                disabled
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <Send size={16} className="ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper for Chevron since lucide-react isn't imported everywhere with it
const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default AIDemo;
