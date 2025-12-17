import React, { useState, useRef } from 'react';
import { CheckCircle2, Camera, Upload } from 'lucide-react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  // Estado para armazenar a URL da imagem (padrão ou carregada pelo usuário)
  const [profileImage, setProfileImage] = useState(IMAGES.PROFILE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <section id="sobre" className="py-20 bg-slate-950 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Profile Image Section */}
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group w-full max-w-md mx-auto">
              
              {/* Input de arquivo oculto */}
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />

              {/* Container da Imagem */}
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 ring-1 ring-slate-800 transition-transform duration-500 group-hover:scale-[1.01]">
                 {/* Botão de Upload Overlay */}
                 <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute top-4 right-4 z-20 bg-slate-900/90 hover:bg-slate-800 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group-hover:opacity-100 opacity-0 flex items-center gap-2 text-sm font-semibold pr-4 border border-slate-700"
                  title="Alterar foto"
                 >
                   <div className="p-1 bg-blue-500/20 rounded-full text-blue-400">
                     <Camera size={18} />
                   </div>
                   Alterar Foto
                 </button>

                 <img 
                   src={profileImage} 
                   alt="Lucas Calumby - Especialista em Tráfego" 
                   className="w-full h-full object-cover object-top min-h-[400px]"
                 />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs z-10 transition-transform hover:-translate-y-1 duration-300 border border-blue-500/50">
                <p className="font-bold text-lg">"Não entrego só números, entrego crescimento."</p>
              </div>
              
              {/* Decorative element behind */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500/20 rounded-2xl -z-10"></div>
            </div>
            
            <p className="text-center text-xs text-slate-500 mt-10 lg:hidden">
              Toque na imagem para alterar a foto
            </p>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quem é <span className="text-blue-500">Lucas Calumby</span>?
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Eu sou especialista em tráfego pago e automação. Sei que cada campanha precisa gerar resultados reais, porque cada lead tem valor e cada investimento precisa retornar.
              </p>
              <p>
                Minha abordagem combina análise de dados minuciosa com automação de processos. Não fico apenas no gerenciador de anúncios; eu olho para o seu negócio como um todo.
              </p>
              <p className="font-medium text-white border-l-4 border-blue-500 pl-4">
                Queremos estar com você. Queremos criar junto com você. Queremos transformar resultados com você.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Especialista em Meta Ads', 'Foco em Automação', 'Análise de Dados', 'Parceria Estratégica'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-500" size={20} />
                  <span className="font-medium text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;