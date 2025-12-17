import React from 'react';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-12 border-b border-slate-900">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Pronto para escalar seus resultados?</h2>
            <p className="text-slate-400 text-lg">
              Vamos conversar sobre como o tráfego pago pode transformar o seu faturamento ainda este mês.
            </p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20"
          >
            <MessageCircle className="group-hover:animate-pulse" />
            Agendar Reunião
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-2xl tracking-tighter text-white">
            LUCAS<span className="text-slate-500">CALUMBY</span>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/ocalumby/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lucas Calumby. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;