import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, description, buttonText, highlighted = false, features }) => {
  return (
    <div className={`p-8 rounded-[24px] border transition-all h-full flex flex-col ${
      highlighted 
        ? 'bg-white border-blue-200 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] relative scale-100 md:scale-105 z-10 overflow-hidden' 
        : 'bg-white/50 border-slate-200 shadow-sm'
    }`}>
      {highlighted && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -mr-16 -mt-16 rounded-full pointer-events-none"></div>
      )}
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl md:text-5xl font-bold text-slate-900">${price}</span>
          <span className="text-sm font-medium text-slate-500">/ per user</span>
        </div>
        <p className="text-[15px] text-slate-500 leading-relaxed min-h-[44px]">
          {description}
        </p>
      </div>
      
      <button className={`w-full py-3.5 rounded-full text-[15px] font-semibold transition-all mb-10 ${
        highlighted 
          ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/10' 
          : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50'
      }`}>
        {buttonText}
      </button>
      
      <div className="mt-auto">
        <p className="text-sm font-semibold text-slate-900 mb-6">Top Features</p>
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                feature.disabled 
                  ? 'bg-slate-100 text-slate-400' 
                  : highlighted ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'
              }`}>
                <Check size={12} strokeWidth={3} />
              </div>
              <span className={`text-[15px] leading-relaxed ${feature.disabled ? 'text-slate-400' : 'text-slate-600'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-slate-900 mb-6">
            Transparent scaling for<br/>modern infrastructure
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          <PricingCard 
            title="Core"
            price="19"
            description="Essential cognitive tools for agile startups."
            buttonText="Start Free Trial"
            features={[
              { text: "Standard messaging and basic AI models" },
              { text: "Basic analytics and administration tools" },
              { text: "Access to email and chat based support", disabled: true }
            ]}
          />
          
          <PricingCard 
            title="Scale"
            price="49"
            description="Advanced logic layers for high-volume operations."
            buttonText="Try Pro Free"
            highlighted={true}
            features={[
              { text: "Everything in Starter, plus:" },
              { text: "Advanced real-time analytics" },
              { text: "Fully featured team control with 1 custom integration" }
            ]}
          />
          
          <PricingCard 
            title="Enterprise"
            price="89"
            description="Custom environments for fortune 500 infrastructure."
            buttonText="Start Free Trial"
            features={[
              { text: "Everything in Growth, plus:" },
              { text: "Unlimited integration with all internal resources and external networks" },
              { text: "Single sign-on and top-tier firewall-protected data" },
              { text: "White-labelled app with custom domain system" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
