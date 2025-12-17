import React from 'react';
import { PRICING_TIERS, WHATSAPP_LINK } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="investimento" className="py-20 bg-slate-950 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Investimento do Projeto</h2>
          <p className="text-lg text-slate-400">Escolha o plano que melhor se adapta ao momento do seu negócio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                tier.recommended 
                  ? 'bg-slate-900 border-2 border-blue-600 shadow-2xl shadow-blue-900/20 scale-105 z-10' 
                  : 'bg-slate-900 border border-slate-800 hover:shadow-xl hover:shadow-slate-900/50'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Recomendado
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${tier.recommended ? 'text-blue-500' : 'text-white'}`}>
                  {tier.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400 font-medium">{tier.period}</span>
                </div>
                {tier.total && (
                  <p className="text-sm text-slate-400 mt-2 font-medium bg-slate-800 inline-block px-2 py-1 rounded border border-slate-700">
                    {tier.total}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-1 rounded-full ${tier.recommended ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-xl font-bold transition-colors ${
                  tier.recommended 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                Contratar Agora
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            * Valores referentes à gestão de tráfego. O investimento em mídia (pago às plataformas) é definido por você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;