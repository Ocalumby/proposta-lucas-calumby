
import React, { useState, useRef } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { TrendingUp, Users, Wallet, Instagram, Quote, ArrowUpRight, CheckCircle2, ImagePlus, MapPin, ExternalLink } from 'lucide-react';
import { IMAGES } from '../constants';

const natanData = [
  { name: 'Investimento', value: 850, color: '#94a3b8' },
  { name: 'Retorno', value: 23640, color: '#2563eb' },
];

const trilhaData = [
  { name: 'Investimento', value: 306.63, color: '#94a3b8' },
  { name: 'Retorno Est.', value: 9600, color: '#2563eb' },
];

const CaseStudies: React.FC = () => {
  // Estado para as imagens dos cases
  const [images, setImages] = useState({
    benvinda: IMAGES.CASE_BENVINDA,
    natan: IMAGES.CASE_NATAN,
    trilha: IMAGES.CASE_TRILHA
  });

  const benvindaInputRef = useRef<HTMLInputElement>(null);
  const natanInputRef = useRef<HTMLInputElement>(null);
  const trilhaInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (key: 'benvinda' | 'natan' | 'trilha', event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages(prev => ({ ...prev, [key]: imageUrl }));
    }
  };

  return (
    <section id="resultados" className="py-20 bg-slate-950 text-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados Comprovados</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não prometemos milagres, entregamos performance. Veja o impacto real que geramos para nossos parceiros recentes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Case 1: Benvinda Estética */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:border-blue-500/50 transition-all flex flex-col group">
            {/* Hidden Input */}
            <input 
              type="file" 
              ref={benvindaInputRef}
              onChange={(e) => handleImageUpload('benvinda', e)}
              accept="image/*"
              className="hidden"
            />
            
            {/* Image Area - Height increased and object-contain added to show full image */}
            <div className="h-[500px] bg-black w-full relative overflow-hidden group-image flex items-center justify-center">
               <button 
                 onClick={() => benvindaInputRef.current?.click()}
                 className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-blue-600 text-white p-2 rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2 text-xs font-bold border border-white/20"
               >
                 <ImagePlus size={16} /> Alterar Imagem
               </button>

               <img 
                 src={images.benvinda} 
                 alt="Benvinda Estética" 
                 className="max-w-full max-h-full object-contain opacity-90 group-hover:scale-[1.02] transition-transform duration-700" 
               />
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-4 left-6">
                  <a 
                    href="https://www.instagram.com/benvidaestetica/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/90 font-medium bg-black/40 hover:bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 w-fit transition-all"
                  >
                    <Instagram size={14} />
                    <span>@benvidaestetica</span>
                    <ExternalLink size={10} className="opacity-50" />
                  </a>
               </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Benvinda Estética</h3>
                  <p className="text-blue-400 font-medium text-xs flex items-center gap-1">
                    <ArrowUpRight size={14} /> Consistência Anual (2025)
                  </p>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <Users size={20} />
                </div>
              </div>

              {/* Depoimento */}
              <div className="mb-6 relative bg-slate-800/50 p-3 rounded-lg border-l-4 border-blue-500">
                <Quote className="absolute top-2 right-2 text-slate-700 opacity-20" size={32} />
                <p className="text-slate-300 italic text-xs relative z-10">
                  "O fluxo de novos clientes nunca foi tão constante. Conseguimos preencher a agenda e focar na expansão da clínica."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/50 hover:bg-slate-950 transition-colors">
                  <p className="text-slate-400 text-[10px] mb-1 uppercase tracking-wide font-bold">Total de Leads</p>
                  <p className="text-2xl font-bold text-white">5.277</p>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-xl border border-emerald-500/30 hover:bg-slate-950 transition-colors">
                  <p className="text-emerald-400 text-[10px] mb-1 uppercase tracking-wide font-bold">Custo por Lead</p>
                  <p className="text-2xl font-bold text-emerald-400">R$ 4,40</p>
                </div>
              </div>

              <div className="mt-auto bg-gradient-to-r from-blue-900/20 to-slate-950/40 p-4 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="text-blue-400" size={16} />
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Investimento Total</span>
                </div>
                <p className="text-2xl font-bold tracking-tight text-white">R$ 23.242,87</p>
              </div>

              <p className="text-[10px] text-center text-emerald-400 font-medium mt-4 flex items-center justify-center gap-1">
                <CheckCircle2 size={12} /> Cliente renovado para 2026
              </p>
            </div>
          </div>

          {/* Case 2: Natan Psicopedagogo */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:border-blue-500/50 transition-all flex flex-col group">
             {/* Hidden Input */}
             <input 
              type="file" 
              ref={natanInputRef}
              onChange={(e) => handleImageUpload('natan', e)}
              accept="image/*"
              className="hidden"
            />
             
             {/* Image Area - Height increased and object-contain added */}
             <div className="h-[500px] bg-black w-full relative overflow-hidden group-image flex items-center justify-center">
               <button 
                 onClick={() => natanInputRef.current?.click()}
                 className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-blue-600 text-white p-2 rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2 text-xs font-bold border border-white/20"
               >
                 <ImagePlus size={16} /> Alterar Imagem
               </button>

               <img 
                 src={images.natan} 
                 alt="Natan Psicopedagogo" 
                 className="max-w-full max-h-full object-contain opacity-90 group-hover:scale-[1.02] transition-transform duration-700" 
               />
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-4 left-6">
                  <a 
                    href="https://www.instagram.com/natan.psicopedagogo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/90 font-medium bg-black/40 hover:bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 w-fit transition-all"
                  >
                    <Instagram size={14} />
                    <span>@natan.psicopedagogo</span>
                    <ExternalLink size={10} className="opacity-50" />
                  </a>
               </div>
               
               {/* ROI Badge */}
               <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-emerald-900/20 animate-pulse pointer-events-none">
                 ROI 27x
               </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Natan Psicopedagogo</h3>
                  <p className="text-blue-400 font-medium text-xs flex items-center gap-1">
                    <ArrowUpRight size={14} /> Campanha de 4 Meses
                  </p>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <TrendingUp size={20} />
                </div>
              </div>

               {/* Depoimento */}
               <div className="mb-4 relative bg-slate-800/50 p-3 rounded-lg border-l-4 border-blue-500">
                <Quote className="absolute top-2 right-2 text-slate-700 opacity-20" size={32} />
                <p className="text-slate-300 italic text-xs relative z-10">
                  "Um retorno sobre investimento que transformou a realidade do consultório. Estratégia cirúrgica e eficiente."
                </p>
              </div>

              {/* Grid de Metricas Detalhado */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-blue-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Leads</p>
                    <p className="text-lg font-bold text-white">228</p>
                 </div>
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-emerald-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Custo/Lead</p>
                    <p className="text-lg font-bold text-emerald-400">R$ 3,73</p>
                 </div>
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-slate-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Investimento</p>
                    <p className="text-lg font-bold text-slate-200">R$ 850</p>
                 </div>
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-indigo-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Retorno</p>
                    <p className="text-lg font-bold text-white">R$ 23.640</p>
                 </div>
              </div>

              {/* Chart */}
              <div className="h-32 w-full mb-3 bg-slate-950/30 rounded-lg p-2 border border-slate-800/30">
                 <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <BarChart data={natanData} margin={{top: 10, right: 10, left: -20, bottom: 0}}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 9}} axisLine={false} tickLine={false} />
                      <YAxis stroke="#94a3b8" tickFormatter={(val) => `R$${val/1000}k`} tick={{fontSize: 9}} axisLine={false} tickLine={false} />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '11px' }}
                        itemStyle={{ color: '#fff' }}
                        formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={32}>
                        {natanData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
              </div>

              <p className="text-[10px] text-center text-emerald-400 font-medium mt-auto flex items-center justify-center gap-1">
                <CheckCircle2 size={12} /> Cliente renovado para 2026
              </p>
            </div>
          </div>

          {/* Case 3: Trilha no Roteiros */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:border-blue-500/50 transition-all flex flex-col group">
             {/* Hidden Input */}
             <input 
              type="file" 
              ref={trilhaInputRef}
              onChange={(e) => handleImageUpload('trilha', e)}
              accept="image/*"
              className="hidden"
            />
             
             {/* Image Area - Height increased and object-contain added */}
             <div className="h-[500px] bg-black w-full relative overflow-hidden group-image flex items-center justify-center">
               <button 
                 onClick={() => trilhaInputRef.current?.click()}
                 className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-blue-600 text-white p-2 rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2 text-xs font-bold border border-white/20"
               >
                 <ImagePlus size={16} /> Alterar Imagem
               </button>

               <img 
                 src={images.trilha} 
                 alt="Trilhandoroteiros" 
                 className="max-w-full max-h-full object-contain opacity-90 group-hover:scale-[1.02] transition-transform duration-700" 
               />
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-4 left-6">
                  <a 
                    href="https://www.instagram.com/trilhandoroteiros/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/90 font-medium bg-black/40 hover:bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 w-fit transition-all"
                  >
                    <Instagram size={14} />
                    <span>@trilhandoroteiros</span>
                    <ExternalLink size={10} className="opacity-50" />
                  </a>
               </div>
               
               {/* CPL Badge */}
               <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-purple-900/20 animate-pulse pointer-events-none">
                 CPL R$ 1,85
               </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Trilhandoroteiros</h3>
                  <p className="text-blue-400 font-medium text-xs flex items-center gap-1">
                    <MapPin size={14} /> Turismo & Viagens
                  </p>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <TrendingUp size={20} />
                </div>
              </div>

               {/* Depoimento */}
               <div className="mb-4 relative bg-slate-800/50 p-3 rounded-lg border-l-4 border-blue-500">
                <Quote className="absolute top-2 right-2 text-slate-700 opacity-20" size={32} />
                <p className="text-slate-300 italic text-xs relative z-10">
                  "O volume de interessados superou as expectativas. Com um custo baixíssimo, conseguimos fechar pacotes que multiplicaram o investimento."
                </p>
              </div>

              {/* Grid de Metricas Detalhado */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-blue-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Leads</p>
                    <p className="text-lg font-bold text-white">166</p>
                 </div>
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-purple-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Custo/Lead</p>
                    <p className="text-lg font-bold text-purple-400">R$ 1,85</p>
                 </div>
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-slate-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Investimento</p>
                    <p className="text-lg font-bold text-slate-200">R$ 306,63</p>
                 </div>
                 <div className="bg-slate-950/50 p-2 rounded-lg border-l-2 border-emerald-500">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Retorno Est.</p>
                    <p className="text-lg font-bold text-white">R$ 9.600+</p>
                 </div>
              </div>

              {/* Chart */}
              <div className="h-32 w-full mb-3 bg-slate-950/30 rounded-lg p-2 border border-slate-800/30">
                 <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <BarChart data={trilhaData} margin={{top: 10, right: 10, left: -20, bottom: 0}}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 9}} axisLine={false} tickLine={false} />
                      <YAxis stroke="#94a3b8" tickFormatter={(val) => `R$${val/1000}k`} tick={{fontSize: 9}} axisLine={false} tickLine={false} />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '11px' }}
                        itemStyle={{ color: '#fff' }}
                        formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={32}>
                        {trilhaData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
              </div>

              <p className="text-[10px] text-center text-emerald-400 font-medium mt-auto flex items-center justify-center gap-1">
                <CheckCircle2 size={12} /> Cliente renovado para 2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
