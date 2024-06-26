// import { type LucideIcon } from 'lucide-react';
import { Icons } from '@/components/icons/sidebar';
import { ReactElement } from 'react';

export interface NavItem {
  title: string;
  href: string;
  icon: keyof typeof Icons;
  isChidren?: boolean;
  children?: NavItem[];
}
