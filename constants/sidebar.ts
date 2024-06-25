import { BookOpenCheck, LayoutDashboard } from 'lucide-react';
import { type NavItem } from '@/types';

export const items: NavItem[] = [
  {
    title: 'Dashboard',
    icon: 'LayoutDashboard',
    href: '/',
    color: 'text-sky-500',
  },
  {
    title: 'Example',
    icon: 'BookOpenCheck',
    href: '/example',
    color: 'text-orange-500',
    isChidren: true,
    children: [
      {
        title: 'Example-01',
        icon: 'BookOpenCheck',
        color: 'text-red-500',
        href: '/example/employees',
      },
    ],
  },
];
