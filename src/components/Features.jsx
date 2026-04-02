import React from 'react';
import { Bot, Zap, Shield, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, badge, badgeColor }) => {
  return (
    <div className="bg-white border border-slate-200 p-8 rounded-[24px] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full">
      <div className="w-12 h-12 bg-[#F8FAFC] border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-sm transition-all text-blue-600">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-[15px] leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 bg-${badgeColor}-50 text-${badgeColor}-600 rounded-full text-xs font-semibold`}>
          <div className={`w-1.5 h-1.5 rounded-full bg-${badgeColor}-500`}></div>
          {badge}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-slate-900 mb-6">
            Empower Your<br/>Digital Workforce
          </h2>
          <p className="text-lg text-slate-500">
            An elite suite of capabilities crafted to multiply output and streamline organizational operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Bot}
            title="Autonomous Agents"
            description="Self-driving AI that continuously resolves, negotiates, and captures leads."
            badge="New Intelligence"
            badgeColor="orange"
          />
          <FeatureCard 
            icon={Zap}
            title="Unified Neural Memory"
            description="Share learned context instantly across your entire global agent network."
            badge="Real-Time Collaboration"
            badgeColor="blue"
          />
          <FeatureCard 
            icon={Sparkles}
            title="Predictive Analytics"
            description="Forecast trajectory and optimize performance metrics with deep learning."
            badge="Actionable Insights"
            badgeColor="purple"
          />
          <FeatureCard 
            icon={Shield}
            title="Military-Grade Safeguards"
            description="Zero-trust architecture ensuring your strict compliance policies are upheld."
            badge="Reliable Security"
            badgeColor="emerald"
          />
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full text-[15px] font-medium transition-all shadow-lg shadow-slate-900/20">
            See All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
