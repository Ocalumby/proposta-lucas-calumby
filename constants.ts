
import { PricingTier, ProcessStep } from './types';
import { Target, Lightbulb, TrendingUp, BarChart3, Settings, MessageSquare, Monitor, FileText } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/5579996058696?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20contratar%20um%20plano";

// --- ÁREA DE IMAGENS ---
// Para alterar as fotos padrão do site, substitua os links abaixo pelos links das suas fotos reais.
export const IMAGES = {
  PROFILE: "https://ik.imagekit.io/ajlftalky/WhatsApp%20Image%202025-12-10%20at%2009.32.23.jpeg", // Foto do Lucas
  CASE_BENVINDA: "https://ik.imagekit.io/ajlftalky/448516187_1552000359036778_6390712127487877921_n.jpg", // Foto do Case Benvinda
  CASE_NATAN: "https://ik.imagekit.io/ajlftalky/505197862_17846294514499326_4012757798964999892_n.jpg", // Foto do Case Natan
  CASE_TRILHA: "https://ik.imagekit.io/ajlftalky/81696627_2510988625825503_977232225231699968_n.jpg" // Foto do Case Trilha
};

export const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Método', href: '#metodo' },
  { label: 'Investimento', href: '#investimento' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Teste de Público',
    description: 'Identificamos quais audiências respondem melhor. O objetivo é descobrir onde estão as pessoas mais propensas a comprar.',
    icon: Target
  },
  {
    number: '02',
    title: 'Teste de Criativo',
    description: 'Validamos imagens, vídeos e textos. Encontramos os formatos e mensagens que geram mais resultados com menor custo.',
    icon: Lightbulb
  },
  {
    number: '03',
    title: 'Otimização',
    description: 'Desativamos o que não funciona e redirecionamos o investimento para os anúncios de melhor desempenho.',
    icon: Settings
  },
  {
    number: '04',
    title: 'Escala',
    description: 'Aumentamos o orçamento gradualmente nas campanhas vencedoras para ampliar os leads e vendas.',
    icon: TrendingUp
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    title: 'Plano Mensal',
    price: 'R$ 1.500',
    period: 'por mês',
    features: [
      'Ideal para testar o serviço',
      'Acompanhamento inicial',
      'Relatórios mensais',
      'Sem fidelidade'
    ],
    recommended: false
  },
  {
    title: 'Plano Trimestral',
    price: 'R$ 1.200',
    period: 'por mês',
    total: 'Total: R$ 3.600',
    features: [
      'Consistência e otimização',
      'Economia de R$ 900 no total',
      'Planejamento de médio prazo',
      'Suporte prioritário'
    ],
    recommended: true
  },
  {
    title: 'Plano Semestral',
    price: 'R$ 1.000',
    period: 'por mês',
    total: 'Total: R$ 6.000',
    features: [
      'Foco em crescimento sólido',
      'Melhor custo-benefício',
      'Estratégia de longo prazo',
      'Economia de R$ 3.000 no total'
    ],
    recommended: false
  }
];

export const TOOLS_LIST = [
  { name: 'Gerenciador de Anúncios', icon: Monitor },
  { name: 'Meta Pixel & API', icon: Settings },
  { name: 'Google Tag Manager', icon: FileText },
  { name: 'Relatórios Semanais', icon: BarChart3 },
];
