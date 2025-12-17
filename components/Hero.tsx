import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 opacity-0 animate-fade-in-up">
            <BarChart2 size={16} />
            <span>Proposta Comercial 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Gestão de Tráfego <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Focada em Resultados
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transforme cliques em oportunidades. Eu ajudo empresas a escalarem suas vendas através de estratégias de anúncios online e automação inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#resultados" 
              onClick={(e) => handleScroll(e, 'resultados')}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1 cursor-pointer"
            >
              Ver Casos de Sucesso
              <ArrowRight size={20} />
            </a>
            <a 
              href="#metodo" 
              onClick={(e) => handleScroll(e, 'metodo')}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all hover:-translate-y-1 cursor-pointer"
            >
              Conhecer Método
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;