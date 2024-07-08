// import { type LucideIcon } from 'lucide-react';
import { Icons } from '@/components/icons/sidebar';

export interface SearchInput {
  keyword: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon: keyof typeof Icons;
  isChidren?: boolean;
  children?: NavItem[];
}

export interface BaseResponse {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface PaginationInput {
  pageIndex: number;
  pageSize: number;
  total: number;
  totalPage: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
}
