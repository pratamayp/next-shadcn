// import { type LucideIcon } from 'lucide-react';
import { Icons } from '@/components/icons/sidebar';

export interface NavItem {
  title: string;
  href: string;
  icon: keyof typeof Icons;
  isChidren?: boolean;
  children?: NavItem[];
}
