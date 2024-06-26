import { BookOpenCheck, LayoutDashboard } from 'lucide-react';
import { type NavItem } from '@/types';

export const items: NavItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    href: '/',
  },
  {
    title: 'Example',
    icon: 'dashboard',
    href: '/example',
    isChidren: true,
    children: [
      {
        title: 'Example-01',
        icon: 'dashboard',
        href: '/example/employees',
      },
    ],
  },
];
