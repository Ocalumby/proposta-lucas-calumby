import React from 'react';
import { PROCESS_STEPS, TOOLS_LIST } from '../constants';
import { MessageCircle, Search, BarChart4 } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="metodo" className="py-20 bg-slate-950 scroll-mt-28">
      <div className="container mx-auto px-6">
        
        {/* The 4 Pillars */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Como Funciona Nosso Método</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Não adivinhamos, testamos. Nossa metodologia é baseada em 4 pilares fundamentais para garantir a melhor performance do seu investimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon || Search;
            return (
              <div key={step.number} className="bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-shadow border border-slate-800 relative group">
                <div className="absolute top-0 right-0 p-4 text-6xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none opacity-50">
                  {step.number}
                </div>
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 relative z-10 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed relative z-10 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Workflow / Daily Routine */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 bg-blue-600 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Como acontece na prática?</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Você não precisa se preocupar com configurações técnicas. Cuidamos de todo o ecossistema para que você foque em atender seus clientes.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Suporte Próximo</h4>
                    <p className="text-blue-100 text-sm">Acesso direto via WhatsApp para alinhamentos rápidos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Search size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Otimização Diária</h4>
                    <p className="text-blue-100 text-sm">Monitoramos as campanhas todos os dias para evitar desperdício.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <BarChart4 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Relatórios Transparentes</h4>
                    <p className="text-blue-100 text-sm">Você saberá exatamente para onde está indo cada centavo.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-10 lg:p-16 bg-slate-900 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Ferramentas que utilizamos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {TOOLS_LIST.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <tool.icon className="text-blue-500" size={24} />
                    <span className="font-medium text-slate-300">{tool.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-10 border-t border-slate-800">
                 <h4 className="font-bold text-white mb-4">Etapas Iniciais</h4>
                 <div className="flex gap-4">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex-1">
                        <div className="h-1 bg-slate-800 rounded-full mb-2 overflow-hidden">
                          <div className={`h-full bg-blue-600 w-${n === 1 ? '1/3' : n === 2 ? '2/3' : 'full'}`}></div>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 uppercase">Etapa {n}</p>
                      </div>
                    ))}
                 </div>
                 <p className="text-sm text-slate-400 mt-3">
                   Briefing Inicial &rarr; Criação de Anúncios &rarr; Lançamento
                 </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;