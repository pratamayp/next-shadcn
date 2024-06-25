import { type LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon | string;
  color?: string;
  isChidren?: boolean;
  children?: NavItem[];
}
