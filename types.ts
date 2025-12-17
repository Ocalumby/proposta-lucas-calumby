import { LucideIcon } from "lucide-react";

export interface PricingTier {
  title: string;
  price: string;
  period: string;
  total?: string;
  features: string[];
  recommended?: boolean;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}