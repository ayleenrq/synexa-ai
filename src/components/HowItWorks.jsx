import React from 'react';
import { Database, Zap, Sparkles, Network } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-24 dark-section !bg-[#0A101C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-white mb-6">
            Built for Scale
          </h2>
          <p className="text-lg text-slate-400 font-light">
            A streamlined pipeline that transforms unstructured data into proactive task execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#111827] border border-white/5 rounded-[24px] p-8 hover:bg-[#151D2C] transition-colors overflow-hidden group">
            <div className="h-48 mb-8 relative rounded-xl bg-slate-900/50 flex items-center justify-center border border-white/5">
               {/* UI Mockup */}
               <div className="w-64 h-32 glass rounded-lg border border-white/10 flex flex-col justify-center px-6 relative shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 justify-center items-center flex"><Database size={16}/></div>
                     <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="h-2 w-3/4 bg-white/5 rounded-full mb-2"></div>
                  <div className="h-2 w-1/2 bg-white/5 rounded-full"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute -right-4 -bottom-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full backdrop-blur-md">Connected</div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Ingest Enterprise Data</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Establish secure pipelines from your fragmented corporate knowledge base.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] border border-white/5 rounded-[24px] p-8 hover:bg-[#151D2C] transition-colors overflow-hidden group">
            <div className="h-48 mb-8 relative rounded-xl bg-slate-900/50 flex items-center justify-center border border-white/5">
               {/* UI Mockup */}
               <div className="w-64 h-32 glass rounded-lg border border-white/10 flex items-center justify-center relative shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-blue-400/30 animate-ping absolute"></div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                      <Zap size={20} className="text-white" />
                    </div>
                  </div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">2. Refine Logic Nodes</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Calibrate AI reasoning to match your distinct operational standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111827] border border-white/5 rounded-[24px] p-8 hover:bg-[#151D2C] transition-colors overflow-hidden group">
            <div className="h-48 mb-8 relative rounded-xl bg-slate-900/50 flex items-center justify-center border border-white/5">
               {/* UI Mockup */}
               <div className="flex gap-4 items-center">
                 <div className="w-14 h-14 rounded-2xl glass border border-purple-500/30 flex items-center justify-center relative"><Sparkles size={24} className="text-purple-400" /></div>
                 <div className="w-16 h-1 bg-white/10 relative"><div className="absolute inset-y-0 left-0 w-1/2 bg-blue-500"></div></div>
                 <div className="w-14 h-14 rounded-2xl glass border border-blue-500/30 flex items-center justify-center"><Network size={24} className="text-blue-400" /></div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">3. Orchestrate Workflows</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Design intricate multi-step automations across diverse toolsets.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111827] border border-white/5 rounded-[24px] p-8 hover:bg-[#151D2C] transition-colors overflow-hidden group">
            <div className="h-48 mb-8 relative rounded-xl bg-slate-900/50 flex items-center justify-center border border-white/5">
               {/* UI Mockup */}
               <div className="w-64 glass rounded-xl border border-white/10 p-5 shadow-lg relative">
                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border border-blue-400"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                 <div className="text-white text-sm font-bold mb-3 flex justify-between"><span>Pro</span><span>$89/mo</span></div>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center"><svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="h-2 w-3/4 bg-white/20 rounded"></div></div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center"><svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="h-2 w-1/2 bg-white/20 rounded"></div></div>
                 </div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">4. Monitor Telemetry</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Visualize ROI and task completion through advanced dashboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
