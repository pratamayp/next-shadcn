'use client';

import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { items } from '@/constants/sidebar';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { SideNav } from './side-nav';

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center gap-2">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-72" aria-describedby={undefined}>
          <SheetTitle>Title</SheetTitle>
          <div className="px-1 py-6 pt-16">
            <SideNav items={items} setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
